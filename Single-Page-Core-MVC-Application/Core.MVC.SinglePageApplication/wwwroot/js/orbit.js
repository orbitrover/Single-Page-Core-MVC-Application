
$.ajaxSetup({ cache: false });
let replaceTarget = "#data_modal_home";
let defaultLoadPage = "";
//------------For Normal Modal View Only---------------------//
//$("body").on("click", ".data-modal-only", function (event) {
//    $('#myModal').modal('show');
//    return false;

//});
//$("body").on("click", "button[data-dismiss]", function (event) {
//    $('#myModal').modal('hide');
//    return false;

//});
////------------For Partial View Only---------------------//
//$("body").on("click", ".data-modal-partial", function (event) {
//    $('#myModalContent').load(this.href, function () {
//        $('#ModalPartial').modal('show');
//        bindForm(this);
//    });
//    return false;

//});
var loader_main = '<div class="loader-main" style="display:none">' +
    '<div class="" style="position: absolute;  top: 0;  left: 0;  right: 0;  bottom: 0;background-color: rgba(0,0,0,0.5);  z-index: 99;  cursor: pointer;">' +
    '<div class="" style="position: absolute;top: 50%;left: 40%;right: 0;bottom: 0;z-index: 9;">' +
    '<div class="spinner-grow text-muted"></div>' +
    '<div class="spinner-grow text-primary"></div>' +
    '<div class="spinner-grow text-success"></div>' +
    '<div class="spinner-grow text-info"></div>' +
    '<div class="spinner-grow text-warning"></div>' +
    '<div class="spinner-grow text-danger"></div>' +
    '<div class="spinner-grow text-secondary"></div>' +
    '<div class="spinner-grow text-dark"></div>' +
    '<div class="spinner-grow text-light"></div>' +
    '</div>' +
    '</div>' +
    '</div>';
var myModalHtml = '<div id="myDynamicModal" class="modal fade">' +
    '<div class="modal-dialog">' +
    //'<form method="post">' +
    '<div class="modal-content">' +
    '<div class="modal-header"><h4 class="modal-title">{heading}</h4 ><button type="button" class="btn-close" data-bs-dismiss="modal" ></button></div>' +
    '<div class="modal-body"> <div id="myModalContent"></div> </div>' +
    '<div class="modal-footer">' +
    //'<input type="submit" value="Submit" class="btn btn-primary btn-sm">' +
    '<button type="button" class="btn btn-default btn-sm" data-bs-dismiss="modal">Close</button></div>' +
    ' </div>' +
    //'</form>' +
    '</div>' +
    '</div>';
var myModalHtml2 = '<div id="myDynamicModal2" class="modal fade">' +
    ' <div class="modal-dialog">' +
    '<div class="modal-content">' +
    ' <div class="modal-header"><h4 class="modal-title">{heading}</h4 ><button type="button" class="btn-close" data-bs-dismiss="modal" ></button></div>' +
    '<div class="modal-body"> <div id="myModalContent2"></div> </div>' +
    ' <div class="modal-footer"><button type="button" class="btn btn-default" data-bs-dismiss="modal">Close</button></div>' +
    ' </div>' +
    ' </div>' +
    '</div>';
var myModalHtml3 = '<div id="myDynamicModal3" class="modal fade">' +
    ' <div class="modal-dialog">' +
    '<div class="modal-content">' +
    ' <div class="modal-header"><h4 class="modal-title">{heading}</h4 ><button type="button" class="btn-close" data-bs-dismiss="modal" ></button></div>' +
    '<div class="modal-body"> <div id="myModalContent3"></div> </div>' +
    ' <div class="modal-footer"><button type="button" class="btn btn-default" data-bs-dismiss="modal">Close</button></div>' +
    ' </div>' +
    ' </div>' +
    '</div>';
var imageModalHtml = '<div id="imgModal" class="modal fade">' +
    '<span class="close" id = "spnClose" ><i class="fa fa-times"></i></span>' +
    '<a id=""></a>' +
    '<img class="modal-content" id="img01" style="max-height: 80%;width: auto;min-width:40%;">' +
    '<div id="caption"></div>' +
    '</div>';


$(function () {
    var body = $('body').find('#myDynamicModal');
    var body2 = $('body').find('#imageModal');
    var findLoader = $('body').find('.loader-main');
    if (findLoader.length == 0) {
        $('body').append(loader_main);
    }
    if (body.length == 0 && body2.length == 0) {
        $('body').append(myModalHtml, myModalHtml2, myModalHtml3, imageModalHtml);

        //var myModal = new bootstrap.Modal(document.getElementById("myModal"), { backdrop: 'static', keyboard: true });
        var myDynamicModal = new bootstrap.Modal(document.getElementById("myDynamicModal"), { backdrop: 'static', keyboard: true });
        var myDynamicModal2 = new bootstrap.Modal(document.getElementById("myDynamicModal2"), { backdrop: 'static', keyboard: true });
        var myDynamicModal3 = new bootstrap.Modal(document.getElementById("myDynamicModal3"), { backdrop: 'static', keyboard: true });
        var imageModal = new bootstrap.Modal(document.getElementById("imgModal"), { backdrop: 'static', keyboard: true });
        //$(document).on('click', 'a[data-bs-toggle]', function (e) {
        //    $('#myModalCont').load(this.href, function () {

        //        myModal.show();
        //        bindForm(this);
        //    });
        //    return false;
        //});
        $(document).on('click', 'a[data-modal-delete]', function (e) {
            if (confirm('are you sure to delete this?')) {
                deleteForm(this.href, myDynamicModal);
            }
            return false;
        });
        $(document).on('click', 'a[data-modal-replace-target]', function (e) {
            replaceTarget = '#' + $(this).attr('tragetid');
            defaultLoadPage = this.href;
            $(replaceTarget).load(this.href, function () { loadResponsiveCss(); });
            return false;
        });
        $(document).on('click', 'a[data-modal-home]', function (e) {
            replaceTarget = '#' + $(this).attr('tragetid');
            defaultLoadPage = this.href;
            $(replaceTarget).load(this.href, function () { loadResponsiveCss(); bindGetForm(this); });
            return false;
        });
        $(document).on('click', 'a[data-modal]', function (e) {
            //var _url = $(this).attr('data-post-target');
            $('#myModalContent').load(this.href, function () {
                var header = $(this).find('#header').val();
                $('#myDynamicModal .modal-header h4').html(header);
                //$('#myDynamicModal .modal-dialog > form').attr('action', _url)
                myDynamicModal.show();
                bindForm(this, myDynamicModal);
            });
            return false;
        });
        $(document).on('click', 'a[data-modal-p]', function (e) {
            $('#myModalContent2').load(this.href, function () {
                var header = $(this).find('#header').val();
                $('#myDynamicModal2 .modal-header h4').html(header)
                myDynamicModal2.show();
                bindForm(this, myDynamicModal2);
            });
            return false;
        });
        $(document).on('click', 'a[data-modal-c]', function (e) {
            $('#myModalContent3').load(this.href, function () {
                var header = $(this).find('#header').val();
                $('#myDynamicModal3 .modal-header h4').html(header)
                myDynamicModal3.show();
                bindForm(this, myDynamicModal3);
            });
            return false;
        });
    }
});
function PartialModal(obj) {

    var href = $(obj).attr('ref');
    $('#myModalContent').load(href, function () {
        myDynamicModal.show();
        bindForm(this);
        $('#CurrentAssigni_Box').show();
        $('#CurrentAssigni').prop('disabled', false);

    });
    return false;
}
function CommonModal(obj, href) {

    $('#myModalContent').load(href, function () {
        myDynamicModal.show();
        bindForm(this);
    });
    return false;
}
function bindForm(dialog, modal) {
    $('form', dialog).submit(function () {
        $.ajax({
            url: this.action,
            type: this.method,
            data: $(this).serialize(),
            success: function (result) {
                $('.loader-main').hide();
                if (result != null && (result.includes('form') && result.includes('table'))) {
                    if (result.msg != null) {
                        if (result.msgType == 'success') {
                            toastr.success(result.msg);
                            if (result.url != '') {
                                $(replaceTarget).load(result.url, function () { loadResponsiveCss(); });
                                //$('#replacetarget').load(result.url);
                            }
                            modal.hide();
                        }
                        else if (result.msgType == 'warning') { toastr.warning(result.msg); }
                        else if (result.msgType == 'info') { toastr.info(result.msg); }
                        else { toastr.error(result.msg); }
                    }
                    else {
                        toastr.success('Success');
                        $(replaceTarget).load(defaultLoadPage, function () { loadResponsiveCss(); });
                        modal.hide();
                    }
                }
                else {
                    bindForm(dialog, modal);
                }

            },
            error: function (response, status, xhr) {
                toastr.error(status + " : something went wrong, try again later");
                bindForm(dialog, modal);
            }
        });
        return false;
    });

}
function bindGetForm(dialog) {
    $('form', dialog).submit(function () {
       
        if (this.method.toLowerCase() == 'get') {
            defaultLoadPage = this.action + '?' + $(this).serialize();
            //let _data = $(this).serialize();
            $.ajax({
                url: this.action,
                type: this.method,
                data: $(this).serialize(),
                success: function (result) {
                    $('.loader-main').hide();
                    if (result != null && (result.includes('form') && result.includes('table'))) {
                        toastr.success('Success');
                        $(replaceTarget).load(defaultLoadPage, function () { loadResponsiveCss(); bindGetForm(dialog); });
                    }
                    else {
                        bindGetForm(dialog);
                    }

                },
                error: function (response, status, xhr) {
                    toastr.error(status + " : something went wrong, try again later");
                    bindGetForm(dialog);
                }
            });

        }
        return false;
    });

}
function deleteForm(_url, modal) {
    $.ajax({
        url: _url,
        type: 'Post',
        success: function (result) {
            if (result.msg != null) {
                if (result.msgType == 'success') {
                    toastr.success(result.msg);
                    if (result.url != '') {
                        debugger;
                        $('#replacetarget').load(result.url, function () { loadResponsiveCss(); });

                    }
                    modal.hide();
                }
                else if (result.msgType == 'warning') { toastr.warning(result.msg); }
                else if (result.msgType == 'info') { toastr.info(result.msg); }
                else { toastr.error(result.msg); }
            }
            else {
                toastr.warning("Oops..! something went wrong, try again later");
            }
        },
        error: function () {
            toastr.error("Error..! something went wrong, try again later");
        }
    });
    return false;
}

$(document)
    .ajaxStart(function () {
        $('input[type="submit"]').prop('disabled', true);
        $('.loader-main').show();
    })
    .ajaxStop(function () {
        $('input[type="submit"]').prop('disabled', false);
        $('.loader-main').hide();
    }).ajaxError(function () {
        $('input[type="submit"]').prop('disabled', false);
        $('.loader-main').hide();
    });

function LoadDefaultDropDown(obj) {
    debugger;
    var selector = $(obj).attr('data-ajax-target');
    var options = {
        url: $(obj).attr('data-ajax-url'),
        type: 'Get',
        //data: { id: $(this).val() },
        success: function (result) {
            $(selector).html('');
            $($(selector).attr('data-ajax-target')).html('');
            $(selector).append('<option value="">--Select--</option>');
            $(result).each(function () {
                var option = '<option value="' + this.value + '">' + this.text + '</option>';
                $(selector).append(option);
            });
        },
        error: function () {
            toastr.error('Somethis is wrong');
        }
    };
    $.ajax(options);
}
$(document).on('change', '[data-ajax-select]', function () {
    debugger;
    var selector = $(this).attr('data-ajax-target');
    var options = {
        url: $(this).attr('data-ajax-url'),
        type: 'Get',
        data: { id: $(this).val() },
        success: function (result) {
            $(selector).html('');
            $(selector).append('<option value="">--Select--</option>');
            $(result).each(function () {
                var option = '<option value="' + this.value + '">' + this.text + '</option>';
                $(selector).append(option);
            });
        },
        error: function () {
            toastr.error('Somethis is wrong');
        }
    };
    $.ajax(options);
});


function Validate(obj, para) {
    var result = true;
    $(para).each(function (option) {
        var ParaName = this.key;
        if (this.value == '') {
            toastr.error('Please Enter ' + this.key + ' value');
            result = false;
            return false;
        }

    });
    return result;
}

//-------------------Image View Javascript-------------//
if ($('body').find('img').length > 0) {

    var imgModal = document.getElementById('imgModal');
    var modalImg = document.getElementById('img01');
    var captionText = document.getElementById('caption');
    var span = document.getElementById("spnClose");
    $(document).on('click', 'a.modal-pop', function (e) {

        e.preventDefault();
        imgModal.style.display = 'block';
        modalImg.src = this.href;
        captionText.innerHTML = $(this).attr('title');
        return false;
    });
    $('#spnClose').on('click', function () {
        imgModal.style.display = 'none';
    });
}




function UniversalInputReset(class_name) {
    jQuery("#" + class_name).find('input,select,select-one').each(function () {

        switch (this.type) {
            case 'password':
            case 'text':
            case 'textarea':
            case 'file':
            case 'date':
            case 'number':
            case 'select-one':
            case 'select-multiple':
            case 'tel':
            case 'email':
                jQuery(this).val('');
                break;
            case 'select':
                jQuery(this).val(0);
                break;
            case 'checkbox':
            case 'radio':
                this.checked = false;
                break;
        }
    });
}


function LoadPartial() {
    $('span:contains(In Progress,Active,Valid,Success,Approved,Assigned,Resolved)').attr('style', 'background-color:#4ac3a1');
    $('span:contains(Closed)').attr('style', 'background-color:#a36ac7');
    $('table').addClass('table table-striped table-bordered table-sm');
};
$(function () {
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    })
});
//----------------Html Sample------------
//     < !--modal placeholder-- >
//    <div id='myDynamicModal' class='modal fade in'>
//        <div class="modal-dialog">
//            <div class="modal-content">
//                <div id='myModalContent'></div>
//            </div>
//        </div>
//     </div>
//    < !--PartialView placeholder-- >
//    < div class="modal-header" >
//    <h4>Modal Header
//    <button data-dismiss="modal" class="close pull-right">x</button>
//    </h4>
//    </div >
//    <div class="modal-body">
//        < !--Modal body Here-- >
//    </div>
//    <div class="modal-footer">
//        <a class="btn btn-default" data-dismiss="modal">Close</a>
//        <input type="submit" value="Submit" class="btn btn-primary" />
//    </div>
