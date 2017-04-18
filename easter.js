var easter = function (){
	year = new Date().getFullYear()+1;
	var a, b, c, d, e, f, g, h, i, k, l, m, p;
	a = year % 19;
	b = Math.floor (year / 100);
	c = year % 100;
	d = Math.floor (b / 4);
	e = b % 4;
	f = Math.floor((b + 8) / 25);
	g = Math.floor((b - f + 1) / 3);
	h = (19 * a + b - d - g + 15) % 30;
	i = Math.floor(c / 4);
	k = c % 4;
	l = (32 + 2 * e + 2 * i - h - k) % 7;
	m = Math.floor((a + 11 * h + 22 * l) / 451);
	p = (h + l - 7 * m + 114) % 31;
	day=p+1;
	month=Math.floor((h+l-7*m+114)/31);
	document.write(day+"."+month);
}

function stay(year, month, day)
{
	if (month==4)
		month2 = "April";
	else 
		month2 = "March";
	var date1 = new Date();
	var date2 = new Date(month2+' '+day+' '+year);
	var diff = date2.getTime() - date1.getTime();
	var dni = Math.floor(diff / (3600000 * 24));
	if (dni == 1) return "1 dzień";
	else return dni+1 + " dni";
}

easter();
$( ".weather" ).append( "do Lanego Poniedziałku zostało "+stay(year, month, day)+".");