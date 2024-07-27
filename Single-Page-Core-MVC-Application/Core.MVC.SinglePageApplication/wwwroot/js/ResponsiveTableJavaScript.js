//---------Author---------------//
//------Orbit Rover-------------//
//---This JavaScript(No dependency) File is Applicable for all table inside the no-more-tables Id attribute in any div---//
//----Just Use <script src="~/js/responsivetablejavascript.js"></script> bottom of the Jquery and Bootstrap js----//
//----This Js is applicable for all type of web applications like HTML, Angule, Recat, MVC, WebForms etc..----//

window.addEventListener('load', function () {
    convertLinkToButtons();
    includeJs();
    CreateResponsiveTable();
});
function loadResponsiveCss() {
    convertLinkToButtons();
    includeJs();
    CreateResponsiveTable();
}
function convertLinkToButtons() {
    let links = document.getElementsByTagName("a");
    if (links.length > 0) {
        for (key = 0; key < links.length; key++) {
            let html = links[key].innerHTML.trim().toLowerCase();
            if (html != '' && html.includes('create')) {
                links[key].setAttribute('data-bs-title', 'Add New');
                links[key].classList.add("btn");
                links[key].classList.add("btn-primary");
                links[key].innerHTML = '<i class="fa fa-plus"></i>';
            }
        }
    }
}
//


function includeJs() {
    //----Here we are adding a responsive table css into Head
    var responsiveCss = document.createElement("style");
    responsiveCss.innerHTML = '@media only screen and (max-width:800px){#no-more-tables table,#no-more-tables tbody,#no-more-tables td,#no-more-tables th,#no-more-tables thead,#no-more-tables tr{display:block}#no-more-tables thead tr{position:absolute;top:-9999px;left:-9999px}#no-more-tables tr{border:1px solid #ccc}#no-more-tables tbody tr th{display:none!important}#no-more-tables td{border:none;border-bottom:1px solid #eee;position:relative;padding-left:40%;white-space:normal;text-align:left}#no-more-tables td:before{position:absolute;top:6px;left:6px;width:45%;padding-right:10px;white-space:nowrap;text-align:left;font-weight:700;content:attr(data-title)}}';
    document.head.appendChild(responsiveCss);

    //----Here we are adding a font-awesome js cdn Body with script tag
    var fa_js = document.createElement("script");
    fa_js.type = "text/javascript";
    fa_js.src = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/js/all.min.js';
    document.body.appendChild(fa_js);

    //----Here we are adding a font-awesome css cdn Body after font-awesome js script with link tag
    var fa_cs = document.createElement("link");
    fa_cs.rel = "stylesheet";
    fa_cs.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css";
    document.body.appendChild(fa_cs);
}

function CreateResponsiveTable() {
    let tables = document.getElementById("no-more-tables").getElementsByTagName("table");

    for (key = 0; key < tables.length; key++) {
        const _titles = [];
        let _tr = tables[key].getElementsByTagName("tr");
        for (i = 0; i < _tr.length; i++) {
            let _th = _tr[i].getElementsByTagName("th");
            for (j = 0; j < _th.length; j++) {
                let title = _th[j].innerHTML;
                _titles.push(title)
            };

            let _td = _tr[i].getElementsByTagName("td");
            let _tdLength = _td.length;
            for (k = 0; k < _td.length; k++) {
                _td[k].setAttribute('data-title', _titles[k]);
                if (k === _tdLength - 1) {
                    let _tdLinks = _td[k].getElementsByTagName("a");
                    for (l = 0; l < _tdLinks.length; l++) {
                        if (_tdLinks[l].innerHTML.trim().toLowerCase() == 'edit') {
                            _tdLinks[l].setAttribute('data-bs-title', 'Modify');
                            _tdLinks[l].setAttribute('data-modal', '');
                            _tdLinks[l].classList.add('btn');
                            _tdLinks[l].classList.add('btn-warning');
                            _tdLinks[l].innerHTML = '<i class="fa fa-pencil"></i>';
                        }
                        else if (_tdLinks[l].innerHTML.trim().toLowerCase() == 'details') {
                            _tdLinks[l].setAttribute('data-bs-title', 'View Details');
                            _tdLinks[l].setAttribute('data-modal', '');
                            _tdLinks[l].classList.add('btn');
                            _tdLinks[l].classList.add('btn-success');
                            _tdLinks[l].innerHTML = '<i class="fa fa-eye open"></i>';
                        }
                        else if (_tdLinks[l].innerHTML.trim().toLowerCase() == 'delete') {
                            _tdLinks[l].setAttribute('data-bs-title', 'Delete This');
                            _tdLinks[l].setAttribute('data-modal', '');
                            _tdLinks[l].classList.add('btn');
                            _tdLinks[l].classList.add('btn-danger');
                            _tdLinks[l].innerHTML = '<i class="fa fa-trash"></i>';
                        }
                        else {
                            _tdLinks[l].setAttribute('data-bs-title', _tdLinks[l].innerHTML.trim() + ' This');
                            _tdLinks[l].setAttribute('data-modal-home', '');
                            _tdLinks[l].setAttribute('tragetid', 'data_modal_home');
                            _tdLinks[l].classList.add('btn');
                            _tdLinks[l].classList.add('btn-info');
                            _tdLinks[l].innerHTML = '<i class="fa fa-cog"></i>';
                        }
                    };

                }
            };
        };
    }

}