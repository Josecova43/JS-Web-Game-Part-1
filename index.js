function newImage(url, left, bottom){
    let newImage = document.createElement('img')
    newImage.src= url
    newImage.style.position= 'fixed'
    newImage.style.left= left + 'px'
    newImage.style.bottom= bottom + 'px'
    document.body.append(newImage)
   
newImage.addEventListener('click', function(){
        newImage.remove()
    })
}

newImage('assets/green-character.gif',100 , 100);
newImage('assets/pine-tree.png', 450, 200)
newImage('assets/tree.png', 200, 300)
newImage('assets/pillar.png', 350,100 )
newImage('assets/crate.png', 150, 200)
newImage('assets/well.png', 500, 425)

newImage('assets/sword.png', 500, 405)
newImage('assets/staff.png',165, 185)
newImage('assets/sheild.png',600, 100)


    

    

    





    
    
    
