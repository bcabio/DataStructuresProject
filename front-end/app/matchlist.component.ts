import { Component } from '@angular/core'
import { MatchListService, Match } from './matchlist.service'
// import { MatTableModule } from '@angular/material/table';

@Component({
	selector: 'matchlist',
	template: `<!DOCTYPE html>
<html>
	<head>
		<title>Character Select</title>
		<style type="text/css">
			body {
				background-color: #1e1e1e;
				cursor: url("images/open_cursor.png");
			}

			header {
				background-color: #1e1e1e;
				background-image: url("images/Header.jpg");
				background-size: 100% 100%;
			}

			.header-image {
				max-width: 100vw;
			}

			.header-image img {
				margin: 0 auto;
				width: 100vw;
			}

			.back {
				height: 20%;
			}

			.back img {
				cursor: url("images/point_cursor.png"), pointer;
				margin-top: 1%;
				margin-left: 12%;
				width: 6%;
			}

			#wrapper {
				max-width: 100%; 
				cursor: url("images/open_cursor.png");
			}

			.row1 {
				position: absolute;
				top: 15%;
				left: 10%;
				width: 80%;
				height: 15%;
			}

			.row2 {
				position: absolute;
				left: 10%;
				top: 27.5%;
				width: 80%;
				height: 15%;
			}

			.row3 {
				position:absolute;
				left: 18.8%;
				top: 40%;
				width: 80%;
				height: 15%;
			}

			.character {
				cursor: url("images/point_cursor.png");
				float: left;
				width: 10%;
				padding-top: 30px;
				padding-bottom: 10px;
				max-height: 100%;
				margin-right: 1%;
			}

			.character img {
				cursor: url("images/point_cursor.png"), pointer;
				max-height: 100%;
				max-width: 100%;
			}

			.selected {
				position: relative;
				margin-top: 22%;
				margin-left: 9%;
				height: 40vh;
				width: 90vw;
			}

			.preview {
				height: 100%;
				width: 20%;
				float: left;
			}

			.start {
				height: 100%;
				width: 18.8%;
				float: left;
			}

			.start img {
				cursor: url("images/point_cursor.png"), pointer;
				width: 100%;
				height: 100%;
			}

			#left-preview {
				padding-right: 15%;
			}

			#logo {
				height: 50%;
				padding-top: 5%;
				padding-right: 15%;
			}

			/* Logo image starts hidden */
			#logo-image {
				display: none;
			}

			.preview img {
				cursor: url("images/point_cursor.png"), pointer;
				width: 100%;
				height: 100%;
			}

			/* Toggle logo images Display*/
			.show {
				display: block;
			}
		</style>
	</head>
	<body>
		<header>
			<!-- Links back to index.html (Main Menu) -->
			<div class="back">
				<a href="index.html">
					<img src="images/back.png">
				</a>
			</div>
		</header>

		<div id="wrapper">
			<!-- First Row of Characters -->
			<div class="row1">
				<!-- Dr. Mario Selection -->
				<div id="Dr_Mario-Main" class="character">
					<img src="images/dr_mario.png">
				</div>
				<!-- Mario Selection -->
				<div id="Mario-Main" class="character">
					<img src="images/mario.png">
				</div>
				<!-- Luigi Selection --> 
				<div id="Luigi-Main" class="character">
					<img src="images/luigi.png">
				</div>
				<!-- Bowser Selection -->
				<div id="Bowser-Main" class="character">
					<img src="images/bowser.png">
				</div>
				<!-- Peach Selection -->
				<div id="Peach-Main" class="character">
					<img src="images/peach.png">
				</div>
				<!-- Yoshi Selection -->
				<div id="Yoshi-Main" class="character">
					<img src="images/yoshi.png">
				</div>
				<!-- Donkey Kong Selection -->
				<div id="Donkey_Kong-Main" class="character">
					<img src="images/donkey_kong.png" >
				</div>
				<!-- Captain Falcon Selection -->
				<div id="Captain_Falcon-Main" class="character">
					<img src="images/captain_falcon.png">
				</div>
				<!-- Ganondorf Selection -->
				<div id="Ganondorf-Main" class="character">
					<img src="images/ganondorf.png">
				</div>
			</div>
			<!-- Second Row of Characters -->
			<div class="row2">
				<!-- Falco Selection -->
				<div id="Falco-Main" class="character" (click)="getMatchesByWinnerCharacter('falco')">
					<img src="images/falco.png">
				</div>
				<!-- Fox Selection -->
				<div id="Fox-Main" class="character">
					<img src="images/fox.png">
				</div>
				<!-- Ness Selection -->
				<div id="Ness-Main" class="character">
					<img src="images/ness.png">
				</div>
				<!-- Ice Climbers Selection -->
				<div id="Ice_Climbers-Main" class="character">
					<img src="images/ice_climbers.png">
				</div>
				<!-- Kirby Selection -->
				<div id="Kirby-Main" class="character">
					<img src="images/kirby.png">
				</div>
				<!-- Samus Selection -->
				<div id="Samus-Main" class="character">
					<img src="images/samus.png">
				</div>
				<!-- Zelda Selection -->
				<div id="Zelda-Main" class="character">
					<img src="images/zelda.png">
				</div>
				<!-- Link Selection -->
				<div id="Link-Main" class="character">
					<img src="images/link.png">
				</div>
				<!-- Young Link Selection -->
				<div id="Young_Link-Main" class="character">
					<img src="images/young_link.png">
				</div>
			</div>
			<!-- Third Row of Characters -->
			<div class="row3">
				<!-- Pichu Selection -->
				<div id="Pichu-Main" class="character">
					<img src="images/pichu.png">
				</div>
				<!-- Pikachu Selection -->
				<div id="Pikachu-Main" class="character">
					<img src="images/pikachu.png">
				</div>
				<!-- Jigglypuff Selection -->
				<div id="Jigglypuff-Main" class="character">
					<img src="images/jigglypuff.png">
				</div>
				<!-- Mewtwo Selection -->
				<div id="Mewtwo-Main" class="character">
					<img src="images/mewtwo.png">
				</div>
				<!-- Mr. Game & Watch Selection -->
				<div id="Mr_Game_&_Watch-Main" class="character">
					<img src="images/mr_game_&_watch.png">
				</div>
				<!-- Marth Selection -->
				<div id="Marth-Main" class="character">
					<img src="images/marth.png">
				</div>
				<!-- Roy Selection -->
				<div id="Roy-Main" class="character">
					<img src="images/roy.png">
				</div>
			</div>
			<!-- Selected Character Previews and Start Button -->
			<div class="selected">
				<!-- Left Character Preview -->
				<div id="left-preview" class="preview">
					<img src="previews/player-bg.jpg" id="player1">
				</div>
				<!-- Start Button -->
				<div id="logo" class="start">
					<img src="images/logo.png" id="logo-image">
				</div>
				<!-- Right Character Preview -->
				<div id="right-preview" class="preview">
					<img src="previews/player-bg.jpg" id="player2">
				</div>
			</div>
		</div>


			<table class="rank-table">
              <tr class="rank-table-row">
                <th> <em> Winner </em> </th>
                <th> <em> Character </em> </th>
                <th> <em> KOs </em> </th>
                <th> <em> Falls </em> </th>
                <th> <em> Loser </em> </th>
                <th> <em> Character </em> </th>
                <th> <em> KOs </em> </th>
                <th> <em> Falls </em> </th>
                <th> <em> Stage </em> </th>
              </tr>
              <tr *ngFor="let match of matchList" class="rank-table-row">
              	<td> {{match.Winner}} </td>
              	<td> {{match.Winner_Character}} </td>
              	<td> {{match.Winner_KOS}}</td> 
              	<td> {{match.Winner_Falls}} </td>
              	<td> {{match.Loser}} </td>
              	<td> {{match.Loser_Character}} </td>
              	<td> {{match.Loser_KOS}} </td>
              	<td> {{match.Loser_Falls}} </td>
              	<td> {{match.Stage}} </td>
              </tr>
            </table>		<script src="jquery-3.2.1.min.js"></script>

		<script type="text/javascript">
			// adds an onclick event to the logo
			$(document).on("click",".start", function () {
   				changePage();
			});

			// adds an onclick event to the character images
			// uses the id of the character div clicked as an
			// argument for placeCharacter() function
			$(document).on("click",".character", function () {
   				var clickedBtnID = $(this).attr('id');
   				placeCharacter(clickedBtnID);
			});

			// adds an onclick event to the character previews
			// uses the id of the preview clicked as an argument
			// for removeCharacter() function
			$(document).on("click",".preview", function () {
   				var clickedBtnID = $(this).attr('id');
   				removeCharacter(clickedBtnID);
			});

			// places a character preview onto the empty background
			// using the imageId as part of the name of the file
			// toggles the logo if both preview spaces are filled
			// does nothing if both character previews are full
			function placeCharacter(imageId) {
				if ($('#player1').attr('src') == "previews/player-bg.jpg" ||
					$('#player2').attr('src') == "previews/player-bg.jpg") {
					if ($('#player1').attr('src') == "previews/player-bg.jpg") {
						$('#player1').attr('src', 'previews/' + imageId + '.jpg');
					} else if ($('#player2').attr('src') == "previews/player-bg.jpg") {
						$('#player2').attr('src', 'previews/' + imageId + '.jpg');
					}
					if ($('#player1').attr('src') != "previews/player-bg.jpg") {
						if ($('#player2').attr('src') != "previews/player-bg.jpg") {
							$('#logo-image').toggle('show');
						}
					}
				}
			}

			// removes character preview and leaves an empty background
			// from the preview clicked
			// toggles the logo if both preview spaces were filled before
			// the preview was clicked
			// does nothing if preview clicked is already empty
			function removeCharacter(player) {
				if ($('#player1').attr('src') != "previews/player-bg.jpg") {
					if ($('#player2').attr('src') != "previews/player-bg.jpg") {
						$('#logo-image').toggle('show');
					}
				}
				if (player == "left-preview") {
					$('#player1').attr('src', 'previews/player-bg.jpg');
				} else if (player == "right-preview") {
					$('#player2').attr('src', 'previews/player-bg.jpg');
				}
			}

			function changePage() {

			}

		</script>
	</body>
</html>

		
        `,
    providers: [MatchListService]
})
export class MatchListComponent{
	ID: string;
	name: string;
	image_url: string;
	description: string;

	matchListService: MatchListService;
	matchList: Array<Match> = []; 

	getMatchesByWinnerCharacter(character: string) {
		this.matchListService.getMatchesByWinnerCharacter(character).subscribe(
			res => {
				let tempMatch: Match;
				for(var k in res){
					console.log('here');
					tempMatch = res[k];
					this.matchList.push(tempMatch);
				}
				this.matchList.shift();
			},
			error => console.error('Error: ')
			);
	}

	constructor(matchListService : MatchListService){
		this.matchListService = matchListService;
		//subscribe to the observable so 
		//that we can parse through all of 
		//the items in the database and push
		//them to our local list of items
		matchListService.getMatches().subscribe(
			res => {
				let tempMatch: Match;
				for(var k in res){
					tempMatch = res[k];
					this.matchList.push(tempMatch);
				}
				this.matchList.shift();
			},
			error => console.error('Error: ')
			);

		
	} 
}