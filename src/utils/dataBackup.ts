export interface BackupData {
  version: string;
  exportDate: string;
  birthdate: string | null;
  lifeExpectancy: string | null;
  quotes: string | null;
  selectedQuoteId: string | null;
  bucketList: string | null;
}

export function exportUserData(): void {
  if (typeof window === 'undefined') return;

  const data: BackupData = {
    version: '1.0',
    exportDate: new Date().toISOString(),
    birthdate: localStorage.getItem('yourtime_birthdate'),
    lifeExpectancy: localStorage.getItem('yourtime_life_expectancy'),
    quotes: localStorage.getItem('my-quotes'),
    selectedQuoteId: localStorage.getItem('selected_quote_id'),
    bucketList: localStorage.getItem('my-bucket-list'),
  };

  const blob = new Blob([JSON.stringify(data, null, 2)], {
    type: 'application/json',
  });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `yourtime-backup-${Date.now()}.json`;
  a.click();
  URL.revokeObjectURL(url);
}

export async function importUserData(file: File): Promise<{
  success: boolean;
  error?: string;
}> {
  if (typeof window === 'undefined') {
    return { success: false, error: 'ブラウザ環境でのみ使用可能です' };
  }

  try {
    const text = await file.text();
    const data = JSON.parse(text) as BackupData;

    if (data.version !== '1.0') {
      throw new Error('サポートされていないファイルバージョンです');
    }

    if (!data.exportDate) {
      throw new Error('不正なバックアップファイルです');
    }

    if (data.birthdate !== null) {
      localStorage.setItem('yourtime_birthdate', data.birthdate);
    }
    if (data.lifeExpectancy !== null) {
      localStorage.setItem('yourtime_life_expectancy', data.lifeExpectancy);
    }
    if (data.quotes !== null) {
      localStorage.setItem('my-quotes', data.quotes);
    }
    if (data.selectedQuoteId !== null) {
      localStorage.setItem('selected_quote_id', data.selectedQuoteId);
    }
    if (data.bucketList !== null) {
      localStorage.setItem('my-bucket-list', data.bucketList);
    }

    return { success: true };
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : 'インポートに失敗しました';
    return { success: false, error: errorMessage };
  }
}

export function clearAllData(): boolean {
  if (typeof window === 'undefined') return false;

  try {
    localStorage.removeItem('yourtime_birthdate');
    localStorage.removeItem('yourtime_life_expectancy');
    localStorage.removeItem('my-quotes');
    localStorage.removeItem('selected_quote_id');
    localStorage.removeItem('my-bucket-list');
    return true;
  } catch (error) {
    console.error('データクリアエラー:', error);
    return false;
  }
}
