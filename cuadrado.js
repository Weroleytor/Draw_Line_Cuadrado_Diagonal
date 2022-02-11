//Dibujar Cuadrado
function Cuadrado(x0, y0, x1, y1, var_color){
    console.log("Método Cuadrado");
    
    //Distancias medio
    var medio_x = 0;
    var medio_y = 0;

    //coordenadas medio
    var c_medio_x = 0;
    var c_medio_y = 0;
    
    //Coordenadas nuevos puntos
    var x2,y2,x3,y3 = 0;

    //Mitad de la diferencia entre los puntos x y y originales
    medio_x = Math.round(((x1-x0)/2));
    medio_y = Math.round(((y1-y0)/2));

    //Coordenadas del punto medio
    c_medio_x = Math.round(x1 - medio_x);
    c_medio_y = Math.round(y1 - medio_y);

    //Coordenadas de los nuevos puntos o esquinas del cuadrado
    x2 = Math.round(c_medio_x - medio_y);
    y2 = Math.round(c_medio_y + medio_x);
    x3 = Math.round(c_medio_x + medio_y);
    y3 = Math.round(c_medio_y - medio_x);

    //Dibujar 4 líneas del cuadrado
    if(document.getElementById('basico_cuadrado').checked){
        console.warn("Cuadrado hecho con el método básico");

        Basico(x0, y0, x2, y2, 0);
        Basico(x2, y2, x1, y1, 1);   
        Basico(x1, y1, x3, y3, 2);
        Basico(x3, y3, x0, y0, 3);

    }else if(document.getElementById('DDA_cuadrado').checked){
        console.warn("Cuadrado hecho con el método DDA");

        DDA(x0, y0, x2, y2, 0);
        DDA(x2, y2, x1, y1, 1);   
        DDA(x1, y1, x3, y3, 2);
        DDA(x3, y3, x0, y0, 3);

    }else if(document.getElementById('bresenham_cuadrado').checked){
        console.warn("Cuadrado hecho con el método Bresenham");

        Bresenham(x0, y0, x2, y2, 0);
        Bresenham(x2, y2, x1, y1, 1);   
        Bresenham(x1, y1, x3, y3, 2);
        Bresenham(x3, y3, x0, y0, 3);
    }

    //Dibujar punto en el medio
    if(document.getElementById('checkbox_cuadrado_punto').checked){
        console.log("Dibujar punto en el medio");

        if(document.getElementById('basico_cuadrado').checked){
            Basico(c_medio_x, c_medio_y, c_medio_x, c_medio_y, 5);
    
        }else if(document.getElementById('DDA_cuadrado').checked){
            DDA(c_medio_x, c_medio_y, c_medio_x, c_medio_y, 5);

        }else if(document.getElementById('bresenham_cuadrado').checked){
            Bresenham(c_medio_x, c_medio_y, c_medio_x, c_medio_y, 5);
        }
    
    }

    //Dibujar Diagonal
    if(document.getElementById('checkbox_cuadrado_diagonal').checked){
        console.log("Dibujar Diagonal");

        if(document.getElementById('basico_cuadrado').checked){
            Basico(x0, y0, x1, y1, 5);
            Basico(x2, y2, x3, y3, 5);  
    
        }else if(document.getElementById('DDA_cuadrado').checked){
            DDA(x0, y0, x1, y1, 5);
            DDA(x2, y2, x3, y3, 5);
            
        }else if(document.getElementById('bresenham_cuadrado').checked){
            Bresenham(x0, y0, x1, y1, 5);
            Bresenham(x2, y2, x3, y3, 5);
        }
    }

    //Mostrar coordenadas de los 2 puntos nuevos
    console.log("x2 " + x2);
    console.log("x3 " + x3);
    console.log("y2 " + y2);
    console.log("y3 " + y3);
}