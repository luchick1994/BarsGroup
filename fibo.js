var doing = confirm("Выполнить\nвычисления?");



    document.write("<pre> <b> <h2>");
    document.write("(Fibonacci row)"); 
    document.write("</h2> </b> </pre> ");

var first=1; // Fibonacci
    document.write("first=", first ," " );

var second=1;
    document.write("<pre>");
    document.write("second=", second ," " );
    document.write("</pre>");

  while(first < 100) {

      second=second+first;
          document.write(second," ");

      first=first+second;
          document.write(first," ");
}

    document.write("<pre> <h2> <b>");
    document.write('(Factorial)');
    document.write("</b> </h2> </pre>");
     
 var factor = 1; // Factorial
    document.write("<pre>");
    document.write("first number=",factor," ");
    document.write("</pre>");

 var length = 3;
    document.write("<pre>");
    document.write("Calculate factorial from this num=",length," ");
    document.write("</pre>");

   for(var i=1; i < length+1; i++) {
              factor = factor*i;
       }

    document.write("<pre>");
    document.write("Calculated factorial=",factor);
    document.write("</pre>");


    document.write("<pre> <h2> <b>");
    document.write('(Bubble sort)');
    document.write("</b> </h2> </pre>");

var mas = [1, 4, 3, 9, 5,0,3,6];

 for(var i=0; i<mas.length; i++){
 for(var j=i+1; j<mas.length; j++){

  if(mas[i] > mas[j]){

       var noy=mas[i];
       mas[i]=mas[j];
       mas[j]=noy;
  }
 }
}
 for(var i=0; i<mas.length; i++){
  document.write(mas[i] + " ");
}
