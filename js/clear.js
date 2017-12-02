function clear(id) {
 var el =document.querySelector('#' + id + ' > ' + 'div');
 if(el.style.display == 'none')	el.style.display = 'flex';
 else el.style.display = 'none';
}