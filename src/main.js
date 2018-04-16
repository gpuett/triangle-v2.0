import './styles.css';
import { Triangle } from './triangle.js';


$(document).ready(function(){
  $("#check").submit(function(event){
    event.preventDefault();
    var side1 = parseInt($("#sideA").val());
    var side2 = parseInt($("#sideB").val());
    var side3 = parseInt($("#sideC").val());
    var triangle = new Triangle(side1, side2, side3);
    var result = triangle.checkType();

    $("#triangleType").text(result);

  });
});
