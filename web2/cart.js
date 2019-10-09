var array=[];
function indexToCart()
{
	document.getElementById("index").style.display="none";
	document.getElementById("carts").style.display="block";
}
function cartToIndex()
{
 	document.getElementById("index").style.display="block";
 	document.getElementById("carts").style.display="none";
}
function cartfunction(x){
	totalCart(x);
}
function totalCart(n){
	var m=array.length;
	m=m+1;
	if (n==1) {
		var img1=document.getElementById("img_1").src;
		var name1=document.getElementById("name_1").textContent;
		var price1=document.getElementById("price_1").textContent;
		var product={img:img1,name:name1,price:price1};
		array.push(product);
		myAddIntoCart(name1,img1,price1);
	}
	if (n==2) {
		var img2=document.getElementById("img_2").src;
		var name2=document.getElementById("name_2").textContent;
		var price2=document.getElementById("price_2").textContent;
		var product={img:img2,name:name2,price:price2};
		array.push(product);
		myAddIntoCart(name2,img2,price2);
	}
	if (n==3) {
		var img3=document.getElementById("img_3").src;
		var name3=document.getElementById("name_3").textContent;
		var price3=document.getElementById("price_3").textContent;
		var product={img:img3,name:name3,price:price3};
		array.push(product);
		myAddIntoCart(name3,img3,price3);
	}
	if (n==4) {
		var img4=document.getElementById("img_4").src;
		var name4=document.getElementById("name_4").textContent;
		var price4=document.getElementById("price_4").textContent;
		var product={img:img4,name:name4,price:price4};
		array.push(product);
		myAddIntoCart(name4,img4,price4);
	}
	document.getElementById("totalcart").innerHTML=array.length;
	console.log(array);
	
}
//truyen gia tri truc tiep tu ham tren
function myAddIntoCart(x,y,z){
	var leng=array.length;
	console.log(array);
	console.log(leng);
	//console.log(array[1].name); khong nhan gia tri trong mang
	var table=document.getElementById("myTable1");
	console.log(table);
	var img = document.createElement('img');
	var btn = document.createElement('button');
	btn.setAttribute("onclick", "updateCart()");
	btn.setAttribute("onclick", "deleteRow(this)");
	var ip = document.createElement("INPUT");
	ip.className="input";
  	ip.setAttribute("type", "number");
  	ip.setAttribute("id", "myNumber");
  	ip.setAttribute("value", "1");
  	ip.setAttribute("name", "quantity");
  	ip.setAttribute("min", "1");
  	ip.setAttribute("max", "");
 	//document.body.appendChild(x);
	//<input type="number" name="quantity" min="1" max="5">
	btn.innerHTML="x";
	btn.className="btn1";
    img.src = y;
	var row=table.insertRow(leng);
	var cell1=row.insertCell(0);
	var cell2=row.insertCell(1);
	var cell3=row.insertCell(2);
	var cell4=row.insertCell(3);
	var cell5=row.insertCell(4);
	var cell6=row.insertCell(5);
	cell1.appendChild(btn);
	cell2.appendChild(img);
	cell3.innerHTML=x;
	cell4.innerHTML=z;
	//var x =document.getElementById("myNumber").value;
	ip.setAttribute("value", ip.value);
	var x=ip.value;
	
	cell5.appendChild(ip);
	console.log("sl"+	x);
	
	cell6.innerHTML=parseInt(z)*ip.value+" đ";
}
function deleteRow(row){
    var d = row.parentNode.parentNode.rowIndex;
    document.getElementById("myTable1").deleteRow(d);
    array.splice(d,1);
    console.log(array);
    updateCart(array.length);
    console.log(array.length);
}
function updateCart(n){
	document.getElementById("totalcart").innerHTML=n;
}
