//Dibujar Rectangulo
function Rectangulo(x0, y0, x1, y1, var_color){
    //Horizontales
    for (let x = x0; x <= x1; x++){
        Bresenham(x0, y0, x1, y0, 0);
        Bresenham(x1, y0, x0, y0, 0);
    }

    for (let x = x0; x <= x1; x++){
        Bresenham(x0, y1, x1, y1, 0);
        Bresenham(x1, y1, x0, y1, 0);
    }

    //Verticales
    for (let x = y0; x <= y1; x++){
        Bresenham(x0, y0, x0, y1, 0);
        Bresenham(x0, y1, x0, y0, 0);
    }

    for (let x = y0; x <= y1; x++){
        Bresenham(x1, y0, x1, y1, 0);
        Bresenham(x1, y1, x1, y0, 0);
    }




    for (let x = x1; x <= x0; x++){
        Bresenham(x0, y0, x1, y0, 0);
        Bresenham(x1, y0, x0, y0, 0);
    }

    for (let x = x1; x <= x0; x++){
        Bresenham(x0, y1, x1, y1, 0);
        Bresenham(x1, y1, x0, y1, 0);
    }

    //Verticales
    for (let x = y1; x <= y0; x++){
        Bresenham(x0, y0, x0, y1, 0);
        Bresenham(x0, y1, x0, y0, 0);
    }

    for (let x = y1; x <= y0; x++){
        Bresenham(x1, y0, x1, y1, 0);
        Bresenham(x1, y1, x1, y0, 0);
    }
}