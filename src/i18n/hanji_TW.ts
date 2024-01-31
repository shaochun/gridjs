export default {
  search: {
    placeholder: '輸入關鍵字...',
  },
  sort: {
    sortAsc:  '升冪排序',
    sortDesc: '降冪排序',
  },
  pagination: {
    previous: '前一頁',
    next: '下一頁',
    navigate: (page, pages) => `Page ${page} of ${pages}`,
    page: (page) => `Page ${page}`,
    showing: '顯示',
    of: '，總共',
    to: '到',
    results: '筆結果',
  },
  loading: 'Loading...',
  noRecordsFound: 'No matching records found',
  error: 'An error happened while fetching the data',
};
