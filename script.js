// storing all the buttons in a button array
var buttons = document.getElementsByClassName("button");
// creating a variable for output
var output = document.getElementById("output");


// creating varibles for operands and operators
var op1 = 0;
var op2 = null;
var operator = null;


// function for finding whether the given value is a operator or not
// this function will return a boolean value
function isOperator(value){
    console.log(value == '+' || value=='-' || value == '*' || value=='/');
    return value == '+' || value=='-' || value == '*' || value=='/';
}

// iterating over the buttons array and checking whether a particular button have been pressed or not
for(var i=0;i<buttons.length;i++)
{
    // adding a event listner
    buttons[i].addEventListener('click',function(){
        // fetching the value of the current button
        // we can access the content of data-value by using "this.dataset" 
        var value = this.getAttribute('data-value');
        // storing the output content in a variable
        // using textContent which is similar to innerText
        // using trim to avoid starting and ending spaces
        var text = output.textContent.trim();

        // now checking whether the value received is a operator or not
        if(isOperator(value))
        {
            // assigning the value to the operator
            operator = value;
            // converting the value of op1 to float
            op1 = parseFloat(text);
            // now as we have encounter the operator, we will erase the output screen
            output.textContent="";
        }
        else if(value == 'ac')
        {
            output.textContent="";
        }
        else if(value == 'sign')
        {
            // convert the sign
            op1 = parseFloat(text);
            op1 = -1*op1;
            output.textContent = op1;
        }
        else if(value == '%')
        {
            op1 = parseFloat(text);
            op1 = op1/100;
            output.textContent = op1;
        }
        else if(value=="=")
        {
            // now we need to evaluate the expression
            // eval can be used for that
            op2 = parseFloat(text);
            var result = eval(op1 + " " + operator + " " +op2);
            // if result is a valid number then display it
            output.textContent=result;
               
            if(result)
            {
                output.textContent=result;
                op1 = result;
                op2 = null;
                operator = null;
            }
        }
        // if we encounter a dot
        else if(value == '.')
        {
            // if it already contains a dot then just skip
            // otherwise add a dot in the end
            if(text.length && !text.includes('.'))
            {
                output.textContent = text+".";
            }
        }
        // else keep on concating the number
        else{
            output.textContent+=value;
        }


    })
}
