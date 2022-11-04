// var i = 0;  //start point
// var images = [];
// var time =3000;

// //image list

// image[0] = 'img/image1.jpg';
// image[1] = 'img/image2.jpg';
// image[2] = 'img/image3.jpg';
// image[3] = 'img/image4.jpg';
// //change image
//   function changeImg(){
//     document.slides.src = images[i];
//     if(i < images.length -1){
//       i++;
//   }else{
//     i=0;
//   }
//   setTimeout("changeImg()", time);

// }
   
//   window.onload = changeImg;
let index = 0;

const carousel = () => {
    // get all images and assign it to an (images) variable
    let images = document.getElementsByClassName('slider')
        // loop over all the images to get  an instance of each of them. i'd explain better when we meet.
     for(let i =0; i < images.length; i++){
        console.log(images)
       // when you get the images, each of their indexes are represented as i, then we are setting their display to none.
        images[i].style.display =  'none'
    }
    // we then increament the index, so that they can be increasing from 1 to 2 to 3 and so on...
    index++

    // we set a condition for the display when it gets to the end,  we want to setthe index back to one, 
    // so that when it gets to the  end  it will  set back to one, and start again
    if(index > images.length){
        index = 1
    }
    // here we set each one to block, according to the index we get to
    images[index-1].style.display = 'block'

    // here we set a timer, 4000 represents 4seconds
    setTimeout(carousel, 4000)

}
//  here we call the  function, it wouldn't run unless you call the function.
carousel()