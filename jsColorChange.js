// JavaScript Document

	// 1 цвет, маленькие картинки 1,2,3
		let s1Pic1 = "../../images/1-3.jpg";
		let s1Pic2 = "../../images/2-3.jpg";
		let s1Pic3 = "../../images/3-3.jpg";

	// 2 цвет, маленькие картинки 1,2,3
		let s2Pic1 = "../images/1green.png";
		let s2Pic2 = "../images/2green.png";
		let s2Pic3 = "../images/3green.png";

	// 3 цвет, маленькие картинки 1,2,3
		let s3Pic1 = "../images/1blue.png";
		let s3Pic2 = "../images/2blue.png";
		let s3Pic3 = "../images/3blue.png";

	// 4 цвет, маленькие картинки 1,2,3
		let s4Pic1 = " ";
		let s4Pic2 = " ";
		let s4Pic3 = " ";

	// 5 цвет, маленькие картинки 1,2,3
		let s5Pic1 = " ";
		let s5Pic2 = " ";
		let s5Pic3 = " ";

	// 6 цвет, маленькие картинки 1,2,3
		let s6Pic1 = " ";
		let s6Pic2 = " ";
		let s6Pic3 = " ";


	// 1 цвет, большие картинки 1,2,3	
		let b1Pic1 = "../../images/1-3.jpg";
		let b1Pic2 = "../../images/2-3.jpg";
		let b1Pic3 = "../../images/3-3.jpg";

	// 2 цвет, большие картинки 1,2,3
		let b2Pic1 = "../images/1green.png";
		let b2Pic2 = "../images/2green.png";
		let b2Pic3 = "../images/3green.png";
		
	// 3 цвет, большие картинки 1,2,3
		let b3Pic1 = "../images/1blue.png";
		let b3Pic2 = "../images/2blue.png";
		let b3Pic3 = "../images/3blue.png";

	// 4 цвет, большие картинки 1,2,3	
		let b4Pic1 = " ";
		let b4Pic2 = " ";
		let b4Pic3 = " ";

	// 5 цвет, большие картинки 1,2,3
		let b5Pic1 = " ";
		let b5Pic2 = " ";
		let b5Pic3 = " ";
		
	// 6 цвет, большие картинки 1,2,3
		let b6Pic1 = " ";
		let b6Pic2 = " ";
		let b6Pic3 = " ";

	// кнопка 1 цвета
		function change1(){							// display:none;
			col1.style=`
			background:black;
 			box-shadow: 0px 0px 20px rgba(46, 229, 157, 1.00);
 			color: white;
			border: rgba(255,255,255,0.70) solid 2px;
			text-shadow: none;`
			col2.style=`background:green;
			box-shadow: none;
			color: white;
		   border: none;
		   text-shadow: none;`
		   col3.style=`background:blue;
			box-shadow: none;
			color: white;
		   border: none;
		   text-shadow: none;`


			// but1c1s1 - кнопка 1 цвет 1 размер-маленький
			let but1c1s1 = document.getElementById("sPic1")
			but1c1s1.src = `${s1Pic1}`
			let but1c1s2 = document.getElementById("sPic2")
			but1c1s2.src = `${s1Pic2}`
			let but1c1s3 = document.getElementById("sPic3")
			but1c1s3.src = `${s1Pic3}`
			// but1c1s1 - кнопка 1 цвет 1 размер-большой
			let but1c1b1 = document.getElementById("bPic1")
			but1c1b1.src = `${b1Pic1}`
			let but1c1b2 = document.getElementById("bPic2")
			but1c1b2.src = `${b1Pic2}`
			let but1c1b3 = document.getElementById("bPic3")
			but1c1b3.src = `${b1Pic3}`
		}
		
		// кнопка 2 цвета
		function change2(){							// display:none;
			col2.style=`background:green;
 			box-shadow: 0px 0px 20px rgba(46, 229, 157, 1.00);
 			color: white;
			border: rgba(255,255,255,0.70) solid 2px;
			text-shadow: none;`
			col1.style=`background:black;
			box-shadow: none;
			color: white;
		   border: none;
		   text-shadow: none;`
		   col3.style=`background:blue;
			box-shadow: none;
			color: white;
		   border: none;
		   text-shadow: none;`


			// but1c1s1 - кнопка 2 цвет 2 размер-маленький
			let but2c2s1 = document.getElementById("sPic1")
			but2c2s1.src = `${s2Pic1}`
			let but2c2s2 = document.getElementById("sPic2")
			but2c2s2.src = `${s2Pic2}`
			let but2c2s3 = document.getElementById("sPic3")
			but2c2s3.src = `${s2Pic3}`
			// but1c1s1 - кнопка 2 цвет 2 размер-большой
			let but2c2b1 = document.getElementById("bPic1")
			but2c2b1.src = `${b2Pic1}`
			let but2c2b2 = document.getElementById("bPic2")
			but2c2b2.src = `${b2Pic2}`
			let but2c2b3 = document.getElementById("bPic3")
			but2c2b3.src = `${b2Pic3}`
		}
			
		
	// кнопка 3 цвета
		function change3(){ 						// display:none;
			col3.style=`background:blue;
 			box-shadow: 0px 0px 20px rgba(46, 229, 157, 1.00);
 			color: white;
			border: rgba(255,255,255,0.70) solid 2px;
			text-shadow: none;`
			col2.style=`background:green;
			box-shadow: none;
			color: white;
		   border: none;
		   text-shadow: none;`
		   col1.style=`background:black;
		   	box-shadow: none;
			color: white;
		   border: none;
		   text-shadow: none;`

		// but3c3s1 - кнопка 3 цвет 3 размер-маленький
			let but3c3s1 = document.getElementById("sPic1")
			but3c3s1.src = `${s3Pic1}`
			let but3c3s2 = document.getElementById("sPic2")
			but3c3s2.src = `${s3Pic2}`
			let but3c3s3 = document.getElementById("sPic3")
			but3c3s3.src = `${s3Pic3}`
		// but3c3s1 - кнопка 3 цвет 3 размер-большой
			let but3c3b1 = document.getElementById("bPic1")
			but3c3b1.src = `${b3Pic1}`
			let but3c3b2 = document.getElementById("bPic2")
			but3c3b2.src = `${b3Pic2}`
			let but3c3b3 = document.getElementById("bPic3")
			but3c3b3.src = `${b3Pic3}`
		}


		function change4(){
			// but4c4s1 - кнопка 4 цвет 4 размер-маленький
			let but4c4s1 = document.getElementById("sPic1")
			but4c4s1.src = `${s4Pic1}`
			let but4c4s2 = document.getElementById("sPic2")
			but4c4s2.src = `${s4Pic2}`
			let but4c4s3 = document.getElementById("sPic3")
			but4c4s3.src = `${s4Pic3}`
			// but4c4s1 - кнопка 4 цвет 4 размер-большой
			let but4c4b1 = document.getElementById("bPic1")
			but4c4b1.src = `${b4Pic1}`
			let but4c4b2 = document.getElementById("bPic2")
			but4c4b2.src = `${b4Pic2}`
			let but4c4b3 = document.getElementById("bPic3")
			but4c4b3.src = `${b4Pic3}`
		}

		function change5(){
			// but5c5s1 - кнопка 5 цвет 5 размер-маленький
			let but5c5s1 = document.getElementById("sPic1")
			but5c5s1.src = `${s5Pic1}`
			let but5c5s2 = document.getElementById("sPic2")
			but5c5s2.src = `${s5Pic2}`
			let but5c5s3 = document.getElementById("sPic3")
			but5c5s3.src = `${s5Pic3}`
			// but5c5s1 - кнопка 5 цвет 5 размер-большой
			let but5c5b1 = document.getElementById("bPic1")
			but5c5b1.src = `${b5Pic1}`
			let but5c5b2 = document.getElementById("bPic2")
			but5c5b2.src = `${b5Pic2}`
			let but5c5b3 = document.getElementById("bPic3")
			but5c5b3.src = `${b5Pic3}`
		}

	// фон кнопок
		col1.style=`background:black;`;
		col2.style=`background:green;`;
		col3.style=`background:blue;`;
		// button4.style=`background:;`;
		// button5.style=`background:;`;
		// button6.style=`background:;`;

	// цветные кнопки
		let page = {
			but1:"document.getElementById('col1')",
			but2:"document.getElementById('col2')",
			but3:"document.getElementById('col3')",
			but4:"document.getElementById('col4')",
			but5:"document.getElementById('col5')",
			but6:"document.getElementById('col6')",
		}
	// вкл\выкл кнопку + нужно удалять из функции
						let but1 = true
						let but2 = true
						let but3 = true
						let but4 = false
						let but5 = false

			if (but1 == false){col1.style=`display:none;`};
			if (but2 == false){col2.style=`display:none;`};
			if (but3 == false){col3.style=`display:none;`};
			if (but4 == false){col4.style=`display:none;`};
			if (but5 == false){col5.style=`display:none;`};



		// размеры
		let sizes = {
			onesize:"document.getElementById('size1')",
			xs:"document.getElementById('size2')",
			s:"document.getElementById('size3')",
			m:"document.getElementById('size4')",
			l:"document.getElementById('size5')",
			xl:"document.getElementById('size6')",
			xxl:"document.getElementById('size7')",
			xxxl:"document.getElementById('size8')",
		}
						let onesize = false
						let xs = true
						let s = true
						let m = false
						let l = true
						let xl = true
						let xxl = true
						let xxxl = false
						

			if (onesize == false){size1.style=`text-decoration:line-through; text-decoration-color:red; opacity:35%;`};
			if (xs == false){size2.style=`text-decoration:line-through; text-decoration-color:red; opacity:35%;`};
			if (s == false){size3.style=`text-decoration:line-through; text-decoration-color:red; opacity:35%;`};
			if (m == false){size4.style=`text-decoration:line-through; text-decoration-color:red; opacity:35%;`};
			if (l == false){size5.style=`text-decoration:line-through; text-decoration-color:red; opacity:35%;`};
			if (xl == false){size6.style=`text-decoration:line-through; text-decoration-color:red; opacity:35%;`};
			if (xxl == false){size7.style=`text-decoration:line-through; text-decoration-color:red; opacity:35%;`};
			if (xxxl == false){size8.style=`text-decoration:line-through; text-decoration-color:red; opacity:35%;`};





