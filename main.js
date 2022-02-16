var names_of_the_guest_array = [];
    
function submit()
{
    var GuestName = document.getElementById("name1").value;
	names_of_the_guest_array.push(Guest_name);
	console.log(GuestName);    
    console.log(names_of_people);
    var lenght_of_name = names_of_people.length;
    console.log(lenght_of_name);
	document.getElementById("display_name").innerHTML=names_of_the_guest_array.toString();
   }



function show()
{
	var i= names_of_the_guest_array.join("<br>");
	console.log(names_of_the_guest_array);
	document.getElementById("p1").innerHTML=i.toString();
	
	
	}


function sorting()
	{
		names_of_the_guest_array.sort();           // add the sort function
		// .sort();
		var i= names_of_the_guest_array.join("<br>");
		console.log(names_of_the_guest_array);		
		document.getElementById("sorted").innerHTML=i.toString();
		}


function searching()
{
	var s= document.getElementById("s1").value;
	var found=0;
	var j;
	for(j=0; j<names_of_the_guest_array.length; j++)
		{
			if(s==names_of_people[j]){
				found=found+1;
			}	
		}
	document.getElementById("p2").innerHTML="name found "+found+" time/s";
	console.log("found name "+found+" time/s");
}
