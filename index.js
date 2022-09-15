document.getElementById('toggle').addEventListener('click', clicked);

function clicked() {
    if(document.getElementById('menus').style.display = 'flex'){
        document.getElementById('toggle').style.display = 'none';
        document.getElementById('close').style.display = 'block';
    }  
}