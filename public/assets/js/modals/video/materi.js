jQuery(document).on('click', '.openVideo', function (){
    jQuery("#videoModal").modal('show')
    $('.modal-video').resizable({
        alsoResize: "#materiVideo",
        minHeight: 150,
        minWidth: 200
    }).bind({
        resizestop: function(event, ui){
          console.log(ui.size.height);
          $('video').css({
            'height':ui.size.height - 60,
            'width': ui.size.width - 30
          })
      }
    })
    $('.modal-dialog').draggable();
    
    $('#videoModal').on('show.bs.modal', function () {
    
        $(this).find('.modal-body').css({
            'max-height':'100%'
        });
    
    });
     $('.modal-backdrop').removeClass("modal-backdrop");    
    
    
    
    $(window).load(function () {
                $('#videoModal').modal({ backdrop: 'static', keyboard: false});
                $('#videoModal').modal('show');
            })
    
})