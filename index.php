<!DOCTYPE html>
<html>
<head>
	<title>Codigos</title>
</head>
<body>

	<!--Recorrer una tabla y ordenar segun el ID-->
	<h1>Recorrer una tabla y ordenar segun el ID</h1>
	<tbody>
		<tr ng-repeat="pp in array2 | orderBy: 'id'">
			<td>@{{pp.area}}</td>
			<td>@{{pp.nombre}}</td>
			<td> 
			<a href="#!"><i class="fa fa-trash"></i></a>
			</td>
		</tr> 
	</tbody>
	<label class="md-check">
		<input type="checkbox" name="a"  ng-model="habilitado" class="has-value ng-pristine ng-valid ng-not-empty ng-touched">
		<i class="green"></i>
		Modificar
	</label>
	<a href="" class="@{{habilitado == 1 ? 'white' : 'habilitado'}}"></a>

	<h1>Ocultar el espacio en blanco de un Select</h1>
	<!--en el controllador poner  $scope.cant_rows = 15;-->
	<select ng-model="cant_rows" ng-init="cant_rows='15'"> 
      	<option value="15">15</option> 
      	<option value="30">30</option>
      	<option value="70">70</option>
      	<option value="100">100</option>
    </select> 

<script src="https://code.jquery.com/jquery-3.1.0.min.js" type="text/javascript"></script> 
</body>
</html>