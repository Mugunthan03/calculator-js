let display = document.getElementById('display')

function calculate(input)
{

    display.value += input
}

function equal()
{
    try
    {
    display.value = eval(display.value)
    }
    catch(err)
    {
        display.value = 'Error'
    }
}

function cleardisplay()
{
    display.value = ' '
}