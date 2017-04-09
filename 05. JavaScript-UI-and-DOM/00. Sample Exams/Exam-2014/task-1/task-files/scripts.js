function createCalendar(selector, data){
    var container = document.querySelector(selector);

    var dayBox = document.createElement('div');
    var dayBoxTitle = document.createElement('strong');
    var dayBoxContent = document.createElement('div');
    dayBoxContent.className = 'day-content';
    dayBoxContent.innerHTML = '&nbsp';

//appending the created elements
    dayBox.appendChild(dayBoxTitle);
    dayBox.appendChild(dayBoxContent);

//days of the week in an array

var daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

//styles

container.style.width = (120*7.5) + 'px';

dayBox.style.border = '1px solid purple';
dayBox.style.width = '120px';
dayBox.style.height = '120px';
dayBox.style.display = 'inline-block';

dayBoxTitle.style.display = 'block';
dayBoxTitle.style.background = 'green';
dayBoxTitle.style.textAlign = 'center';
dayBoxTitle.style.borderBottom = '1px solid purple';

    function createMonthBoxes(){
        var dayBoxes = [];
        for (var i = 0; i < 30; i +=1) {
            var dayOfWeek = daysOfWeek[i%7];
            dayBoxTitle.innerHTML = dayOfWeek + ' ' + (i) + 'Jun 2014';
            dayBoxes.push(dayBox.cloneNode(true));
        }


 
        return dayBoxes;
    }

    function addEvents(boxes, events){
        for (var i = 0; i < events.length; i +=1) {
            var event = events[i];
            var content = boxes[event.date - 1].querySelector('.day-content');
            content.innerHTML = event.hour + ' ' + event.title;
        }
    }

    function onBoxMouseover(ev){
        
    }

    function onBoxMouseout(ev){
        
    }
    function onBoxClick(ev){
        
    }

    var boxes = createMonthBoxes();
    addEvents(boxes, events);


    for (var i = 0; i <boxes.length ; i +=1) {
        container.appendChild(boxes[i]);
        
    }
}