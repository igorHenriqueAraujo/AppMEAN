angular.module('cicloDePagamentos').constant('consts', {
  appName: 'CP - Ciclo de Pagamentos',
  version: '1.0.0',
  owner: 'Igor Henrique Araújo',
  year: '2017',
  site: 'https://www.linkedin.com/in/igorhenriquearaujo/',
  apiUrl: 'http://localhost:3003/api',
}).run(['$rootScope', 'consts', function($rootScope, consts) {
  $rootScope.consts = consts
}])
