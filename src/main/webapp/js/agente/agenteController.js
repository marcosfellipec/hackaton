App.controller('agenteController', function($scope, agenteService, $route){
	$scope.agente = [];
	$scope.notFound = false;
	agenteService.list().then(function(data){
		$scope.agente = data.data;
		if(data.data.length == 0){
			$scope.notFound = true;
		}
	},function(data){
		console.log("data", data);
	});

	$scope.deletar = function(id){
		Tipo.delete(id).then(function(data){
			console.log(data);
			$route.reload();
		});	
	}
});	