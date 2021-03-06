  document.querySelector('#search-by-title-button').addEventListener("click", zoeken);
        document.querySelector('#search-by-title-reset').addEventListener("click", reset);

        var input = document.querySelector("#search-by-title-button");

        input.addEventListener("keyup", function(event) {
            if (event.keyCode === 13) {
                event.preventDefault();
                document.querySelector("#search-by-title-button").click();
            }
        });

        function zoeken() {
            
            var tietel = document.querySelector("#t").value;
            var jaar = document.querySelector("#y").value;
            //console.log('www.omdbapi.com/?apikey=8f5b4526&t=' + tietel);
            var uri = 'https://www.omdbapi.com/?apikey=8f5b4526&type=movie&s=' + tietel + '&y=' + jaar;
            console.log(uri);

            var request = new XMLHttpRequest();
            request.open('get', uri);
            request.responseType = 'json';
            request.send();

            request.addEventListener("load", function() {
                showData(request.response);
                //console.log("request is geladen: ", request.response);
                //er is data
                //nu kun je iets doen zoals de json echo'en
                //section.textContent = JSON.stringify(data);
            });              

        }

        function showData(jsonObj) {
            var films = jsonObj;
            var section = document.querySelector('section');

            console.log("showData films", films);

            for (var i = 0; i < films.totalResults; i++) {

                console.log("films" + i);
                var article = document.createElement('article');

                var filmposter = document.createElement('img');
                if (films.Search[i].Poster === "N/A") {
                    filmposter.setAttribute("src", "hier wat anders");
                } else {
                    filmposter.setAttribute("src", films.Search[i].Poster);    
                }
                

                var filmtitel = document.createElement('h3');
                filmtitel.textContent = films.Search[i].Title;

                var filmtype = document.createElement('p');
                filmtype.textContent = films.Search[i].Type;

                var filmjaar = document.createElement('p');
                filmjaar.textContent = films.Search[i].Year;

                var filmimdb = document.createElement('a');
                filmimdb.setAttribute("href", "https://www.imdb.com/title/" + films.Search[i].imdbID);
                filmimdb.setAttribute("target", "_blank")
                filmimdb.textContent = ("Meer Info");


                article.appendChild(filmposter);
                article.appendChild(filmtitel);
                article.appendChild(filmtype);
                article.appendChild(filmjaar);
                article.appendChild(filmimdb);
                section.appendChild(article);
            }
        }

        function reset() {
            location.reload();

        }
        //https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent
