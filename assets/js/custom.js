// Add your custom JS code here

$(function () {
    var includes = $('[data-include]');
    jQuery.each(includes, function () {
        var file = 'views/' + $(this).data('include') + '.html';
        $(this).load(file);
    });


    // setTimeout(function () {
    //     $('#nav-hamburger').click(function () {
    //         $('html').toggleClass("menu-open")
    //     })

        // $('#__BVID__11').click(function() {
        //     $('#__BVID__11 > ul').addClass("hidden")
        //     $('#__BVID__12 > ul').addClass("d-none")
        //     $('#__BVID__11 > ul').toggleClass("show")
        // })

        // $('#__BVID__12').click(function() {
        //     $('#__BVID__11 > ul').addClass("d-none")
        //     $('#__BVID__12 > ul').addClass("d-none")
        //     $('#__BVID__12 > ul').toggleClass("show")
        // })

    //}, 500)

});

// "use strict";
// $(document).ready(function() {
//     // partnersGet
//     $(".content partners-layout").on('click', function() {
//         var $this = $(this);
//         $this.parents('.card').animate({
//             'opacity': '0',
//             '-webkit-transform': 'scale3d(.3, .3, .3)',
//             'transform': 'scale3d(.3, .3, .3)'
//         });

//         setTimeout(function() {
//             $this.parents('.card').remove();
//         }, 800);
//     });
// });


// async function BKpartnersGet() {
//     var resultElement = document.getElementById('getResult1');
//     resultElement.innerHTML = '';       
//     axios.get('https://ufax24.com/')
//         .then(function (response) {
//         console.log(response)
//         resultElement.innerHTML = generateSuccessHTMLOutput(response);
//         })
//         .catch(function (error) {
//         console.log(error)
//         resultElement.innerHTML = generateErrorHTMLOutput(error);
//         });   
//     }

// document.getElementById('todoInputForm').addEventListener('submit', performPostRequest);

// function performPostRequest(e) {
//   var resultElement = document.getElementById('postResult');
//   var todoTitle = document.getElementById('todoTitle').value;
//   resultElement.innerHTML = '';
  
//   axios.post('http://jsonplaceholder.typicode.com/todos', {
//     userId: '1',
//     title: todoTitle,
//     completed: false
//   })
//   .then(function (response) {
//     resultElement.innerHTML = generateSuccessHTMLOutput(response);
//   })
//   .catch(function (error) {
//     resultElement.innerHTML = generateErrorHTMLOutput(error);
//   });
  
//   e.preventDefault();
// }

// function performGetRequest2() {
//     var resultElement = document.getElementById('getResult2');
//     var todoId = document.getElementById('todoId').value;
//     resultElement.innerHTML = '';
    
//     axios.get('http://jsonplaceholder.typicode.com/todos', {
//       params: {
//         id: todoId
//       }
//     })
//     .then(function (response) {
//       console.log(response);
//       resultElement.innerHTML = generateSuccessHTMLOutput(response);
//     })
//     .catch(function (error) {
//         resultElement.innerHTML = generateErrorHTMLOutput(error);
//     });
//   }

//   function generateSuccessHTMLOutput(response) {
//     return  '<h4>Result</h4>' + 
//             '<h5>Status:</h5> ' + 
//             '<pre>' + response.status + ' ' + response.statusText + '</pre>' +
//             '<h5>Headers:</h5>' + 
//             '<pre>' + JSON.stringify(response.headers, null, '\t') + '</pre>' + 
//             '<h5>Data:</h5>' + 
//             '<pre>' + JSON.stringify(response.data, null, '\t') + '</pre>'; 
//   }
  
//   function generateErrorHTMLOutput(error) {
//     return  '<h4>Result</h4>' + 
//             '<h5>Message:</h5> ' + 
//             '<pre>' + error.message + '</pre>' +
//             '<h5>Status:</h5> ' + 
//             '<pre>' + error.response.status + ' ' + error.response.statusText + '</pre>' +
//             '<h5>Headers:</h5>' + 
//             '<pre>' + JSON.stringify(error.response.headers, null, '\t') + '</pre>' + 
//             '<h5>Data:</h5>' + 
//             '<pre>' + JSON.stringify(error.response.data, null, '\t') + '</pre>'; 
//   }