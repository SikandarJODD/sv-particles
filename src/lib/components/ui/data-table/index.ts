import TableSearch from './table-search.svelte';
import TablePagination from './table-pagination.svelte';
import RowsPerPage from './rows-per-page.svelte';
import ThSort from './th-sort.svelte';
import RowCount from './row-count.svelte';
import DataTable from './data-table.svelte';

export { TableSearch, ThSort, TablePagination, RowsPerPage, RowCount, DataTable };

// All the above components are inspired by the original library: https://vincjo.fr/datatables/
// The goal of these components is customization — adapt them based on your needs.
// The only important thing: learn how to use the `TableHandler` class from the original library.
// Library docs: https://vincjo.fr/datatables/