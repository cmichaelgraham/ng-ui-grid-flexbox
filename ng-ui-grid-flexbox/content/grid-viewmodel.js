(function (module) {

    module.controller('gridViewModel', ['$window', '$timeout', function ($window, $timeout) {

        var gridData = [
            { LastName: 'Graham', FirstName: 'Mike', FavoriteColor: 'green', GitHubID: 'cmichaelgraham' },
            { LastName: 'Vader', FirstName: 'Darth', FavoriteColor: 'black', GitHubID: 'darthvader' },
            { LastName: 'Solo', FirstName: 'Han', FavoriteColor: 'white', GitHubID: 'hansolo' },
            { LastName: 'Hut', FirstName: 'Jabba', FavoriteColor: 'brown', GitHubID: 'jabbathehut' }
        ];

        var gridOptions = {
            data: 'vm.gridData',
            enableGridMenu: true,
            columnDefs: [
                { name: 'LastName', field: 'LastName', width: '25%' },
                { name: 'FirstName', field: 'FirstName', width: '25%' },
                { name: 'FavoriteColor', field: 'FavoriteColor', width: '25%' },
                { name: 'GitHubID', field: 'GitHubID', width: '25%' }
            ],
            onRegisterApi: function (gridApi) {
                o.gridApi = gridApi;
            }
        };

        var o = {
            message: 'this is the grid-viewmodel message...',
            gridData: gridData,
            gridOptions: gridOptions
        };

        return o;
    }]);

}(angular.module('app')));
