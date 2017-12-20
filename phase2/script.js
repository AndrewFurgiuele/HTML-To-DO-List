

//adds a item to the list
function addElementToList(t, where){

    var list = $('ul');
    var li = $('<li />',{"class": "liElement"});

    var textSpan = $('<span />',{
        "class": 'textSpan',
        text: t
    });
    li.append(textSpan);

    var checkBoxSpan = $('<span />',{
        "class": 'checkBoxSpan',
        click: function(e){
            li.toggleClass('checked');
            checkBoxSpan.toggleClass('checked');
        }
    });

    var checkSpan = $('<span />',{
        "class": 'checkSpan',
    });

    checkBoxSpan.append(checkSpan);
    li.append(checkBoxSpan);

    addExtraButtons(li);

    list.append(li);
    $('#txtBoxNewTask').val('');

}



//functionality of button
function addButtonClick(){

    var input = $('#txtBoxNewTask').val();

    if(input.length > 0){
        addElementToList(input, 0);
    }else{
        alert('Input cannot be empty');
    }

    $('#txtBoxNewTask').focus();

}






//adds the edit and delete buttons
function addExtraButtons(li){

        var editSpan = $('<span />',{
            "class": 'edit',
            text: ' edit |',
            click: function(e){
                var textSpan = li.find('.textSpan');
                textSpan.attr('contentEditable', true);
                textSpan.focus();

                textSpan.focusout(function(){
                    textSpan.attr('contentEditable', false);
                });

                $(document).keypress(function(e) {
                    if(e.which  ==  13) {
                        textSpan.blur();
                    }
                });
            }
        });

        var delSpan = $('<span />',{
            "class": 'delete',
            text: 'delete',
            click: function(e){
                li.hide();
            }
        });

        li.append(editSpan);
        li.append(delSpan);

}



//allows enter to trip button
$(function(){
    $('#txtBoxNewTask').keypress(function(e){
        if(e.keyCode  ==  13){
            addButtonClick();
        }
    });

});





