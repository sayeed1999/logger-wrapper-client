export default class Pagination {
    constructor(
        index = 1, 
        size = 25, 
        searchText = '',
    ) {
        this.pageIndex = index;
        this.pageSize = size;
        this.searchText = searchText;
    }
}