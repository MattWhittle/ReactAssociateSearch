import ASSOCIATES from '../api/associates.json';


module.exports = {
    filterAssociates: function (associates, searchText) {
        let filteredAssociates = associates;

        filteredAssociates = filteredAssociates.filter((associate)=>{
            let text = associate.Display_Name.toLowerCase();
            return searchText.length === 0 || text.indexOf(searchText) > -1;
        });

        return filteredAssociates;
    }
};