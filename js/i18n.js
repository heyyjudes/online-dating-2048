function update_captions(){
  if(window.innerWidth < 520){
    captions = ["Match", 
                "Chat",
      "<span style='display:inline-block;line-height:11px;vertical-align:middle'>Video Date</span>", 
       "Walk",
      "Coffee",
      "Dinner", 
      "<span style='font-size:11px'>More dates</span>", 
      "FWB",
      "<span style='font-size:11px'>Exclusivity</span>", 
        "<span style='font-size:11px'>Relationship</span>",
        "Love",
      "<span style='font-size:smaller'>Partnership</span>",
      "<span style='font-size:smaller'>Engagement</span>", 
     "Marriage", 
    "<span style='font-size:smaller'>Happily Ever After</span>"];
    captions_rel = ["<span style='font-size:9px;'>Good Sex</span>",
      "<span style='font-size:11px;'>Bad Sex</span>"];
  }
  else{
    captions = ["Match", "Chat",
      "<span style='font-size:24px;display:inline-block;line-height:24px;vertical-align:middle'>Video Date</span>", 
      "Walk",
      "Coffee",
      "Dinner",
      "<span style='font-size:20px'>More dates</span>", 
      "FWB",
      "<span style='font-size:20px'>Exclusivity</span>", 
     "<span style='font-size:18px'>Relationship</span>", 
     "Love",
      "<span style='font-size:smaller'>Partnership</span>",
      "<span style='font-size:smaller'>Engagement</span>", "Marriage", "Happily Ever After"];
    captions_rel = ["<span style='font-size:15px;'>Good Sex</span>",
      "<span style='font-size:20px;'>Doubts</span>"];
  }
}

var span_en;

function create_switch_en(){
  span_en = document.createElement('div');
  span_en.style.position = "absolute";
  span_en.style.top = "0";
  if(window.innerWidth < 520)
    span_en.style.fontSize = "10px";
  else
    span_en.style.fontSize = "small";
  span_en.style.backgroundColor = "#8f7a66";
  span_en.style.borderRadius = "0 0 3px 3px";
  span_en.style.padding = "3px 10px";
  span_en.style.color = "white";
  span_en.style.cursor = "pointer";
  span_en.onclick = play_in_english;
  span_en.textContent = "🇬🇧 Switch to English";
  var container = document.querySelector('.container');
  container.insertBefore(span_en, container.firstChild);
}


function play_in_english(){
  update_captions();
  window.addEventListener('resize', update_captions, true);

  caption_garbage = "<span style='font-size:smaller'>Ghosted</span>";
  window.game.actuate();

  game_title = "Love..";
  game_alt_title = "Love";
  result_msg = "You are ";
  var titleElem = document.getElementById('title');
  if(titleElem.textContent != "Love") titleElem.textContent = game_title;
  document.querySelector('.restart-button').textContent = "Delete the Apps";
  document.querySelector('.retry-button').textContent = "Try again";
  document.querySelector('.game-explanation').innerHTML = "<strong class='important'>How to play the love game:</strong> Use your <strong>arrow keys</strong> to move the bricks. When two bricks of the same type touch, they <strong>merge into one!</strong><br> However, your can always get ghosted. Getting ghosted twice makes your stronger and two ghosted bricks vanish when they touch. You will stop getting ghosted after becoming exclusive.<br><strong>Good sex</strong> upgrades any brick it touches for the first time. The brick shows the number of times you have benefited from it. When the dompamine fades, it will become a <strong>Doubts</strong> brick (or you could even get ghosted), which downgrades bricks as your situationship spirals downwards.";

  if(span_en) span_en.parentNode.removeChild(span_en);
  create_switch_zh();
  window.game.storageManager.storage.setItem('lang', 'en');
}