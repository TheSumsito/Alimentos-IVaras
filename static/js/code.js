$(document).ready(function(){
    $('.container .cont-administrar .producto').css({'display':'none'});
    $('.container .cont-administrar .act-producto').css({'display':'none'});
    $('.container .cont-administrar .reg-producto').css({'display':'none'});

    $('.container .cont-administrar .boton #btn-receta').click(function(){
        $('.container .cont-administrar .producto').css({'display':'none'});
        $('.container .cont-administrar .act-producto').css({'display':'none'});
        $('.container .cont-administrar .reg-producto').css({'display':'none'});
        $('.container .cont-administrar .act-receta').css({'display':'inline'});
    });

    $('.container .cont-administrar .boton #btn-producto').click(function(){
        $('.container .cont-administrar .act-receta').css({'display':'none'});
        $('.container .cont-administrar .act-producto').css({'display':'none'});
        $('.container .cont-administrar .producto').css({'display':'grid'});
    });

    $('.container .cont-administrar .producto .table tr td #btn-modificar').click(function(){
        $('.container .cont-administrar .act-receta').css({'display':'none'});
        $('.container .cont-administrar .reg-producto').css({'display':'none'});
        $('.container .cont-administrar .act-producto').css({'display':'grid'});
    });

    $('.container .cont-administrar .producto .boton #btn-agregar').click(function(){
        $('.container .cont-administrar .act-producto').css({'display':'none'})
        $('.container .cont-administrar .act-receta').css({'display':'none'});
        $('.container .cont-administrar .reg-producto').css({'display':'grid'});
    });
});

$(document).ready(function(){
    $('.container .cont-inventario .anadir-producto').css({'display':'none'});
    $('.container .cont-inventario .mod-producto').css({'display':'none'});

    $('.container .cont-inventario .boton #btn-anadir').click(function(){
        $('.container .cont-inventario .mod-producto').css({'display':'none'});
        $('.container .cont-inventario .anadir-producto').css({'display':'grid'});
    });

    $('.container .cont-inventario .table tr td #btn-modificar').click(function(){
        $('.container .cont-inventario .anadir-producto').css({'display':'none'});
        $('.container .cont-inventario .mod-producto').css({'display':'grid'});
    });
});

$(document).ready(function(){
    $('.container .cont-ver-mas .row .col-texto .boton #btn-detalle').click(function(){
        $('.container .cont-ver-mas .row #col-texto-01').css({'display':'none'});
        $('.container .cont-ver-mas .row #col-texto-02').css({'display':'grid'});
    });

    $('.container .cont-ver-mas .row .col-texto .boton #btn-volver').click(function(){
        $('.container .cont-ver-mas .row #col-texto-02').css({'display':'none'});
        $('.container .cont-ver-mas .row #col-texto-01').css({'display':'grid'});
    });
});