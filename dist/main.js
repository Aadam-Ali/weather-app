(()=>{var e={559:e=>{"use strict";e.exports=JSON.parse('{"200":{"label":"thunderstorm with light rain","icon":"storm-showers"},"201":{"label":"thunderstorm with rain","icon":"storm-showers"},"202":{"label":"thunderstorm with heavy rain","icon":"storm-showers"},"210":{"label":"light thunderstorm","icon":"storm-showers"},"211":{"label":"thunderstorm","icon":"thunderstorm"},"212":{"label":"heavy thunderstorm","icon":"thunderstorm"},"221":{"label":"ragged thunderstorm","icon":"thunderstorm"},"230":{"label":"thunderstorm with light drizzle","icon":"storm-showers"},"231":{"label":"thunderstorm with drizzle","icon":"storm-showers"},"232":{"label":"thunderstorm with heavy drizzle","icon":"storm-showers"},"300":{"label":"light intensity drizzle","icon":"sprinkle"},"301":{"label":"drizzle","icon":"sprinkle"},"302":{"label":"heavy intensity drizzle","icon":"sprinkle"},"310":{"label":"light intensity drizzle rain","icon":"sprinkle"},"311":{"label":"drizzle rain","icon":"sprinkle"},"312":{"label":"heavy intensity drizzle rain","icon":"sprinkle"},"313":{"label":"shower rain and drizzle","icon":"sprinkle"},"314":{"label":"heavy shower rain and drizzle","icon":"sprinkle"},"321":{"label":"shower drizzle","icon":"sprinkle"},"500":{"label":"light rain","icon":"rain"},"501":{"label":"moderate rain","icon":"rain"},"502":{"label":"heavy intensity rain","icon":"rain"},"503":{"label":"very heavy rain","icon":"rain"},"504":{"label":"extreme rain","icon":"rain"},"511":{"label":"freezing rain","icon":"rain-mix"},"520":{"label":"light intensity shower rain","icon":"showers"},"521":{"label":"shower rain","icon":"showers"},"522":{"label":"heavy intensity shower rain","icon":"showers"},"531":{"label":"ragged shower rain","icon":"showers"},"600":{"label":"light snow","icon":"snow"},"601":{"label":"snow","icon":"snow"},"602":{"label":"heavy snow","icon":"snow"},"611":{"label":"sleet","icon":"sleet"},"612":{"label":"shower sleet","icon":"sleet"},"615":{"label":"light rain and snow","icon":"rain-mix"},"616":{"label":"rain and snow","icon":"rain-mix"},"620":{"label":"light shower snow","icon":"rain-mix"},"621":{"label":"shower snow","icon":"rain-mix"},"622":{"label":"heavy shower snow","icon":"rain-mix"},"701":{"label":"mist","icon":"sprinkle"},"711":{"label":"smoke","icon":"smoke"},"721":{"label":"haze","icon":"day-haze"},"731":{"label":"sand, dust whirls","icon":"cloudy-gusts"},"741":{"label":"fog","icon":"fog"},"751":{"label":"sand","icon":"cloudy-gusts"},"761":{"label":"dust","icon":"dust"},"762":{"label":"volcanic ash","icon":"smog"},"771":{"label":"squalls","icon":"day-windy"},"781":{"label":"tornado","icon":"tornado"},"800":{"label":"clear sky","icon":"sunny"},"801":{"label":"few clouds","icon":"cloudy"},"802":{"label":"scattered clouds","icon":"cloudy"},"803":{"label":"broken clouds","icon":"cloudy"},"804":{"label":"overcast clouds","icon":"cloudy"},"900":{"label":"tornado","icon":"tornado"},"901":{"label":"tropical storm","icon":"hurricane"},"902":{"label":"hurricane","icon":"hurricane"},"903":{"label":"cold","icon":"snowflake-cold"},"904":{"label":"hot","icon":"hot"},"905":{"label":"windy","icon":"windy"},"906":{"label":"hail","icon":"hail"},"951":{"label":"calm","icon":"sunny"},"952":{"label":"light breeze","icon":"cloudy-gusts"},"953":{"label":"gentle breeze","icon":"cloudy-gusts"},"954":{"label":"moderate breeze","icon":"cloudy-gusts"},"955":{"label":"fresh breeze","icon":"cloudy-gusts"},"956":{"label":"strong breeze","icon":"cloudy-gusts"},"957":{"label":"high wind, near gale","icon":"cloudy-gusts"},"958":{"label":"gale","icon":"cloudy-gusts"},"959":{"label":"severe gale","icon":"cloudy-gusts"},"960":{"label":"storm","icon":"thunderstorm"},"961":{"label":"violent storm","icon":"thunderstorm"},"962":{"label":"hurricane","icon":"cloudy-gusts"}}')}},l={};function n(i){var o=l[i];if(void 0!==o)return o.exports;var a=l[i]={exports:{}};return e[i](a,a.exports,n),a.exports}(()=>{const e=n(559);async function l(l){const n=`https://api.openweathermap.org/data/2.5/weather?q=${l}&appid=3d8a891474136ba2fd8128c8c8b2754d&units=metric`,i=await fetch(n,{mode:"cors"});"Not Found"!==i.statusText&&function({name:l,sys:n,main:i,weather:o}){var a;$(".city").text(`${l}, ${n.country}`),$(".description").text(o[0].description),$("#weather-icon").attr("class",(a=o[0].id,"wi wi-"+e[a].icon)),$(".temp").text(Math.round(i.temp))}(await i.json())}$(".btn-search").click((function(e){e.preventDefault(),l($(".city-input").val()),$(".city-input").val(""),$(".form").css("display","none"),$(".btn-open-search").css("display","block")})),$(".btn-open-search").click((function(e){e.preventDefault(),$(this).css("display","none"),$(".form").css("display","flex")})),l("London")})()})();