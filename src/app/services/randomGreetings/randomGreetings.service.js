import angular from 'angular';

class RandomGreetings {
  constructor() {
    // this.greetings = ['Stay Tuned!', 'It\'s not a Tuma!!!', 'Keep on Clickin...'];
  this.greetings = {
    quotes: [
        {
          quote: 'It\'s showtime!',
          movie: 'The Running Man (1987)'
        },
        {
          quote: 'Allow me to break the ice.',
          movie: 'Batman & Robin (1997)'
        },
        {
          quote: 'Alright everyone, chill.',
          movie: 'Batman & Robin (1997)'
        },
        {
          quote: 'I need your clothes, your boots, and your motorcycle.',
          movie: 'Terminator 2: Judgment Day (1991)'
        },
        {
          quote: 'Dillon! you sonofabitch.',
          movie: 'Predator (1987)'
        },
        {
          quote: 'Now listen to me very carefully.',
          movie: 'Terminator 2: Judgment Day (1991)'
        },
        {
          quote: 'Arnold (pre-recorded): \"You, are not you. You\'re me.\"... No shit.',
          movie: 'Total Recall (1990)'
        },
        {
          quote: 'I\'m back.',
          movie: 'Terminator 3: Rise of the Machines (2003)'
        },
        {
          quote: 'If it bleeds... we can kill it.',
          movie: 'Predator (1987)'
        },
        {
          quote: 'Jehnna: \"Conan, what is best in life? Arnold: \"To crush your enemies, see them driven before you, and hear the lamentation of their women.\"',
          movie: 'Conan the Barbarian (1982)'
        },
        {
          quote: '"Do it. DO IT! Come on, kill me, I\'m here! COME ON, DO IT NOW, KILL MEEEE!!',
          movie: 'Predator (1987)'
        }
      ]
    };
  }

  getGreeting() {
    const totalGreetings = this.greetings.quotes.length;
    const rand = Math.floor(Math.random() * totalGreetings);
    return this.greetings.quotes[rand];

  }
}

export default angular.module('services.random-greetings', [])
  .service('randomGreetings', RandomGreetings).name;

  //   "Bystander: \"HEY! What the hell did you do to him, man?!\"<br />Arnold: \"I did nothing. The pavement was his enemy.\"-- Twins (1988)",
  //   "Terrorist: \"If you want your kid back, you're gonna have to cooperate. Right?\"<br />Arnold: \"Wrong.\"<br /><span class=\"action\">*shot to the head*</span><br />-- Commando (1985)",
  //   "\"I'm going to ask you a bunch of questions, and I want to have them answered immediately.\"-- Kindergarten Cop (1990)",
  //   "Arnold: \"Now I'm gonna untie you, and then you're gonna get dressed, and then you're gonna come with me.\"<br />Amber: \"Oh yeah? But why should I?\"<br />Arnold: \"Because I'm gonna say 'please'...\"<br /><span class=\"action\">*lifts bed she's tied to towards 8th story window*</span><br />-- The Running Man (1987)",
  //   "Killian: \"You bastard. Drop dead!\"<br />Arnold: \"I don't do requests.\"-- The Running Man (1987)",
  //   "Killian: \"Do you know who I am?\"<br />Arnold: \"I've seen you before. You're the asshole on TV.\"-- The Running Man (1987)",
  //   "Tony: \"You got a lot of nerve showing your face around here, Hauser.\"<br />Arnold: \"Heh, look who's talking.\"-- Total Recall (1990)",
  //   "Melina: \"What you been feeding this thing?\"<br /><span class=\"action\">*grabs his junk*</span><br />Arnold: \"Blondes.\"-- Total Recall (1990)",
  //   "\"Ha! Crom laughs at your Four Winds.\"-- Conan the Barbarian (1982)",
  //   "Arnold: \"You're a funny guy, Sully, I like you.\"<br />Sully: <span class=\"action\">*smiles*</span><br />Arnold: \"That's why I'm going to kill you last.\"-- Commando (1985)",
  //   "\"Bullshit.\"-- Predator (1987)",
  //   "\"That's bullshit.\"-- Total Recall (1990)",
  //   "\"C'mon, don't bullshit me.\"-- Total Recall (1990)",
  //   "\"You set us up! It's all bullshit! All of it!!\"-- Predator (1987)",
  //   "John Connor: \"Jesus, You were gonna kill that guy!\"<br />Arnold: \"Of course. I'm a terminator.\"-- Terminator 2: Judgment Day (1991)",
  //   "Jehnna: \"I suppose nothing hurts you.\"<br />Arnold: \"Only pain.\"-- Conan the Destroyer (1984)",
  //   "Clerk: \"Hey! Are you gonna pay for that??\"<br />Arnold: \"Talk to the hand.\"-- Terminator 3: Rise of the Machines (2003)",
  //   "<span class=\"action\">*shirtless, wielding knife*</span><br /> \"Come on Bennett. Let's party.\"-- Commando (1985)",
  //   "Guard: \"Give us the girl or we'll take her.\"<br />Arnold: \"Enough talk!\"<br /><span class=\"action\">*throws knife into guard's chest*</span><br />-- Conan the Destroyer (1984)",
  //   "\"Into the boat!\"-- Conan the Destroyer (1984)",
  //   "\"Into the tunnel!\"-- Conan the Destroyer (1984)",
  //   "\"GET TO THE CHOPPAAAAAAAA\"-- Predator (1987)",
  //   "Lori: \"Sweetheart.. we're married!\"<br />Arnold: \"Consider that a divorce.\"-- Total Recall (1990)",
  //   "\"Chill out... dickwad.\"-- Terminator 2: Judgment Day (1991)",
  //   "\"Hello, cutie pie! One of us is in deeeep trouble.\"-- The Running Man (1987)",
  //   "\"I'm pregnant.\"-- Junior (1994)",
  //   "Kid: \"It might be a tumor?\"<br />Arnold: \"It's not a tumor! It's not a tumor, at all.\"-- Kindergarten Cop (1990)",
  //   "<span class=\"action\">*grabs man by the collar*</span><br /> \"STOP... CHEERING ME UP\"-- True Lies (1994)",
  //   "\"No problemo.\"-- Terminator 2: Judgment Day (1991)",
  //   "<span class=\"action\">*punch*</span><br />\"That's for sleeping with my wife. In a damn minivan.\"-- The 6th Day (2000)",
  //   "\"Grant me revenge! And if you do not listen, then the hell with you!\"-- Conan the Barbarian (1982)",
  //   "\"The hell you will...\"-- Last Action Hero (1993)",
  //   "\"The hell with you.\"-- The Running Man (1987)",
  //   "\"Who the hell are you??\"-- Last Action Hero (1993)",
  //   "\"My name is John Kimble...\"<br /><span class=\"action\">*cocks shotgun*</span><br />\"And I love my car.\"-- Kindergarten Cop (1990)",
  //   "Dude: \"You're shittin' me!\"<br />Arnold: \"I am not shitting on you.\"-- Red Heat (1988)",
  //   "\"Hey, you want to be a farmer? Here's a couple of acres.\"<br /><span class=\"action\">*kicks guy across the street*</span><br />-- Last Action Hero (1993)",
  //   "<span class=\"action\">*knocks guys out into urinal, flushes*</span><br />\"Here, cool off.\"-- True Lies (1994)",
  //   "<span class=\"action\">*impales guy to wall*</span><br />\"Stick around.\"-- Predator (1987)",
  //   "\"Give you a lift?\"<br /><span class=\"action\">*lifts up, throws guy off building*</span><br />-- The Running Man (1987)",
  //   "<span class=\"action\">*kicks down door*</span><br />\"Knock knock.\"-- Predator (1987)",
  //   "\"Comó estás?\"<br /><span class=\"action\">*stabs soldier*</span><br />-- Commando (1985)",
  //   "\"You're fired.\"<br /><span class=\"action\">*shoots missile into helicopter*</span><br />-- True Lies (1994)",
  //   "<span class=\"action\">*shoots alligator in face*</span><br />\"You're luggage.\"-- Eraser (1996)",
  //   "\"You're a stupid.\"-- Red Heat (1988)",
  //   "<span class=\"action\">*ice cream truck explodes*</span><br />\"Iced that guy... to cone a phrase.\"-- Last Action Hero (1993)",
  //   "<span class=\"action\">*car crashes into cola billboard*</span><br />\"Well that hit the spot.\"-- The Running Man (1987)",
  //   "\"To be... or not to be?\"<br /><span class=\"action\">*lights cigar as building explodes*</span><br />\"Not to be.\"-- Last Action Hero (1993)",
  //   "\"The ice man cometh!\"-- Batman & Robin (1997)",
  //   "\"Hey, lighthead! Hey, christmas tree!\"-- The Running Man (1987)",
  //   "Buzzsaw: \"I love this saw. This saw's part of me. And I'M GONNA MAKE IT PART OF YOU!\"<br />Arnold: \"That's alright, keep it!\"-- The Running Man (1987)",
  //   "Amber: \"I'm warning you, I get sick. Air sick, car sick. I'm gonna throw up all over you.\"<br />Arnold: \"Go ahead. Won't show on this shirt.\"-- The Running Man (1987)",
  //   "<span class=\"action\">*after cutting Buzzsaw in half*</span><br />Amber: \"What happened to Buzzsaw??\"<br />Arnold: \"Ahh, he had to split.\"-- The Running Man (1987)",
  //   "\"Doesn't anyone stay dead anymore?\"-- The 6th Day (2000)",
  //   "\"Let's... kick some ice.\"-- Batman & Robin (1997)",
  //   "\"This is war.\"-- Jingle All the Way (1996)",
  //   "\"Now this is the plan: get your ass to Mars.\"-- Total Recall (1990)",
  //   "<span class=\"action\">*shoots a guy while diving into cover*</span><br />Lee: \"You're late.\"<br />Arnold: \"Traffic.\"-- Eraser (1996)",
  //   "Doorman: \"Your invitation, please?\"<br />Arnold: \"Sure. Here's my invitation.\"<br /><span class=\"action\">*detonates charge, destroying building*</span><br />-- True Lies (1994)",
  //   "\"What killed the dinosaurs? The ice age!\"-- Batman & Robin (1997)",
  //   "\"Crom!\"-- Conan the Destroyer (1984)",
  //   "\"Frosty?\"-- Batman & Robin (1997)",
  //   "\"Mac! MAAAAAAAC!\"-- Predator (1987)",
  //   "\"The riddle... of steel!\"-- Conan the Barbarian (1982)",
  //   "Protester: \"God doesn't want you to go in there. Don't go in there, man!\"<br />Arnold: \"Well then god shouldn't have killed my dog.\"-- The 6th Day (2000)",
  //   "Arnold: \"You should clone yourself.\"<br />Drucker: \"Why's that?\"<br />Arnold: \"So you can go fuck yourself.\"-- The 6th Day (2000)",
  //   "Doctor: \"She's dead.\"<br />Arnold: \"You LIIIIIEEEE!!\"-- Batman & Robin (1997)",
  //   "Arnold: \"I'm not a pervert! I'm just looking for a Turbo Man doll!!\"<br />Santa: \"You want a Turbo Man for Christmas?\"<br />Arnold: \"Forget it. I'm not going to sit on your lap.\"-- Jingle All the Way (1996)",
  //   "\"Bring the toy back, bring the toy back to the carpet, bring it back to the carpet!!\"-- Kindergarten Cop (1990)",
  //   "\"Take your toy back to the carpet. TAKE IT BACK!!\"-- Kindergarten Cop (1990)",
  //   "\"For the first time in my life, I'm... PISSED OFF!!\"-- Twins (1988)",
  //   "<span class=\"action\">*choking scientist*</span><br /> \"My name... is not Quaid!\"-- Total Recall (1990)",
  //   "Vincent: \"Stop it.\"<br />Arnold: \"No, I won't stop it, I want my baby!\"-- Twins (1988)",
  //   "Vincent: \"Money talks and bullshit walks!\"<br />Arnold: \"How can bullshit walk?\"-- Twins (1988)",
  //   "Arnold: \"I don't know what the problem is, but I'm sure it can be solved without resorting to violence.\"-- Twins (1988)",
  //   "\"But I'm ALL woman.\"-- Junior (1994)",
  //   "<span class=\"action\">*whispering*</span><br /> \"My nipples are very sensitive.\"-- Junior (1994)",
  //   "\"Feel how soft my skin is!\"-- Junior (1994)",
  //   "Arnold: \"Stop being such a pussy!\"<br />Chicago: \"You fuckin' shot me!\"<br />Arnold: \"It's just a scratch!\"-- End of Days (1999)",
  //   "Arnold: <span class=\"action\">*surprised*</span><br /> \"You're bleeding!\"<br />Chicago: \"Of course I'm bleeding! You fuckin' shot me!\"-- End of Days (1999)",
  //   "\"I do not want to touch his ass. I want to make him talk.\"-- Red Heat (1988)",
  //   "\"Ok, but make it quick. My horse is getting tired.\"-- True Lies (1994)",
  //   "\"I need a vacation.\"-- Terminator 2: Judgment Day (1991)",
  //   "\"OH SHIT!\"-- Junior (1994)",
  //   "\"Shit!\"-- Last Action Hero (1993)",
  //   "\"Shit.\"-- The 6th Day (2000)",
  //   "\"Shit!\"-- Total Recall (1990)",
  //   "\"Shit... SHIT!\"-- Total Recall (1990)",
  //   "\"SHIT!\"-- Total Recall (1990)",
  //   "<span class=\"action\">*hitting helicopter controls*</span><br /> \"Come on you piece of shit... fly or DIE!\"-- Commando (1985)",
  //   "\"We are going to play a wonderful game called who is your daddy, and what does he do?\"-- Kindergarten Cop (1990)",
  //   "\"I'm a cybernetic organism, living tissue over a metal endoskeleton.\"-- Terminator 2: Judgment Day (1991)",
  //   "\"Come with me if you want to live.\"-- Terminator 2: Judgment Day (1991)",
  //   "\"Danger is my trade.\"-- Red Sonja (1985)",
  //   "\"I'm the famous comedian, Arnold Brawnschwaigger!\"-- Last Action Hero (1993)",
  //   "\"Now remember, I could break your neck like a chicken's.\"-- The Running Man (1987)",
  //   "\"You are mine now, you belong to me! You're not gonna have your mommies run behind you anymore and wipe your tushies. No more complaining, no more 'Mr. Kimble let me go to the bathroom', nothing! THERE IS NO BATHROOM.\"-- Kindergarten Cop (1990)",
  //   "\"Shut up.\"-- The 6th Day (2000)",
  //   "\"Shut up!\"-- Eraser (1996)",
  //   "\"SHUUUT UUUPPP!\"-- Last Action Hero (1993)",
  //   "\"Shut up!\"-- Junior (1994)",
  //   "\"SHUT AAAAAAAAAAAHHHHHPPPPPP!!!!\"-- Kindergarten Cop (1990)",
  //   "<span class=\"action\">*pulls out gun*</span><br /> \"Shut up.\"-- Raw Deal (1986)",
  //   "<span class=\"action\">*wife throws a full cake at him*</span><br /> \"You should not drink and bake.\"-- Raw Deal (1986)",
  //   "\"Fuck. You.\"-- Commando (1985)",
  //   "\"Fuck you.\"-- The Running Man (1987)",
  //   "\"Fuck you, asshole.\"-- The Terminator (1984)",
  //   "\"Fuck you.\"-- Total Recall (1990)",
  //   "\"Fuck you.\"-- Terminator 2: Judgment Day (1991)",
  //   "Guard: \"Fuck you, asshole.\"<br /><span class=\"action\">*gun clicks, empty*</span><br />Arnold: \"No, fuck YOU asshole!\"-- Commando (1985)",
  //   "\"The guy's a fucking asshole.\"-- Total Recall (1990)",
  //   "\"Assholes.\"-- True Lies (1994)",
  //   "\"Dickhead!\"-- Twins (1988)",
  //   "\"Scumbag.\"-- Commando (1985)",
  //   "\"Sluts!\"-- Conan the Barbarian (1982)",
  //   "\"Bastards!!\"-- Total Recall (1990)",
  //   "<span class=\"action\">*staring down a predator*</span><br /> \"One. Ugly. Motherfucker.\"-- Predator (1987)",
  //   "<span class=\"action\">*staring down a predator*</span><br /> \"What the HELL are you?\"-- Predator (1987)",
  //   "\"Who the fuck are you?\"-- The 6th Day (2000)",
  //   "\"Jesus Marge! What the FUCK!!\"-- The 6th Day (2000)",
  //   "\"YOU BLEW MY COVER!!\"-- Total Recall (1990)",
  //   "\"He molested, murdered, and mutilated her!\"-- Raw Deal (1986)",
  //   "\"It's as satisfying to me as uh... coming is. Like having sex with a woman and coming.\"-- Arnold Schwarzenegger, on concentration curls",
  //   "\"Milk is for babies. When you grow up you have to drink beer!\"-- Arnold Schwarzenegger, Pumping Iron (1977)",
  //   "\"FREEZE IN HELL BATMAAAAAN!\"-- Batman & Robin (1997)",
  //   "\"You killed my father. Big mistake.\"-- Last Action Hero (1993)",
  //   "\"You've just been erased.\"<br /><span class=\"action\">*truck ploughs into guys car, blowing it up*</span><br />-- Eraser (1996)",
  //   "\"You are TERMINATED!\"-- Terminator 3: Rise of the Machines (2003)",
  //   "\"See you at the party, Richter!\"<br /><span class=\"action\">*gleefully throws two limbs down an elevator shaft*</span><br />-- Total Recall (1990)",
  //   "\"Freeze well!\"-- Batman & Robin (1997)",
  //   "<span class=\"action\">*kills guy on airplane, places blanket and hat over face*</span><br />\"Excuse me- don't disturb my friend. He's dead tired.\"-- Commando (1985)",
  //   "<span class=\"action\">*loads bullets into gun in gun store*</span><br />Clerk: \"Hey, you can't do that!\"<br />Arnold: \"Wrong.\"<br /><span class=\"action\">*shoots guy in face*</span><br />-- The Terminator (1984)",
  //   "\"When the governor gets here, call me.\"-- Last Action Hero (1993)",
  //   "Cooke: \"This green beret's gonna kick yo big ass.\"<br />Arnold: \"I eat green berets for breakfast. And right now... I'm VERY HUNGRY.\"-- Commando (1985)",
  //   "\"You've seen those movies where they say 'make my day' or 'I'm your worst nightmare'? Well listen to this one... rubber baby buggy bumpers.\"-- Last Action Hero (1993)",
  //   "\"Ha hahaha ha ha! You think this is the real Quaid?\"<br /><span class=\"action\">*cops turn around, thinking it's a hologram*</span><br />\"It is.\"<br /><span class=\"action\">*shoots cops with machine gun*</span><br />-- Total Recall (1990)",
  //   "\"You're not sending ME to the cooler...\"-- Batman & Robin (1997)",
  //   "\"I have my orders.\"-- Red Heat (1988)",
  //   "Mall Cop: \"DROP THE GUN! Yeah, that's right drop the gun!\"<br />Arnold: \"Hey, I'm a police officer. This is an arrest.\"-- Kindergarten Cop (1990)",
  //   "Mall Cop: \"Freeze!\"<br />Arnold: \"I'm a cop you eediot! I'm Detective John Kimble, this man is under arrest.\"-- Kindergarten Cop (1990)",
  //   "Sacha: \"Where's your evidence?\"<br /><span class=\"action\">*pushes Sacha to the ground, opens his prosthetic leg, pours cocaine out*</span><br />Arnold: \"Cocainum.\"-- Red Heat (1988)",
  //   "Partier: \"So who are you man?\"<br /><span class=\"action\">*cocks shotgun, shoots table*</span><br />Arnold: \"I'm the party pooper.\"-- Kindergarten Cop (1990)",
  //   "<span class=\"action\">*holding Sully over edge of roof*</span><br />Arnold: \"Remember Sully when I promised to kill you last?\"<br />Sully: \"Th-that's right Matrix, you did!\"<br />Arnold: \"I lied.\"-- Commando (1985)",
  //   "\"No sequel for you.\"<br /><span class=\"action\">*shoots explosives*</span><br />-- Last Action Hero (1993)",
  //   "\"I'll be back.\"-- Last Action Hero (1993)",
  //   "\"I'll... be back.\"-- The Terminator (1984)",
  //   "\"I'll be back.\"-- Twins (1988)",
  //   "\"I'll be back.\"-- The Running Man (1987)",
  //   "\"I'll be BACK.\"-- Commando (1985)",
  //   "\"I'll be back.\"-- Terminator 2: Judgment Day (1991)",
  //   "\"BWA HAHAHAHAHA!\"-- Batman & Robin (1997)",
  //   "\"Ahahahaha!\"-- Conan the Barbarian (1982)",
  //   "\"Get down.\"-- Terminator 2: Judgment Day (1991)",
  //   "\"Get down!\"-- Total Recall (1990)",
  //   "\"Get down!\"-- Terminator 3: Rise of the Machines (2003)",
  //   "\"Get down!\"-- Eraser (1996)",
  //   "\"Get DOWN!!!\"-- Collateral Damage (2002)",
  //   "\"Get down!!\"-- True Lies (1994)",
  //   "\"Get down, or I'll put you down.\"-- End of Days (1999)",
  //   "\"Get out.\"-- Eraser (1996)",
  //   "\"Get out.\"-- The Terminator (1984)",
  //   "\"Get out.\"-- Eraser (1996)",
  //   "\"Get down.\"-- Terminator 3: Rise of the Machines (2003)",
  //   "\"Hasta la vista. Baby.\"-- Terminator 2: Judgment Day (1991)",
  //   "<span class=\"action\">*impales guy onto steam chamber with pipe*</span><br />\"Let off some steam, Bennett.\"-- Commando (1985)",
  //   "\"Here is Subzero. Now... Plain Zero.\"-- The Running Man (1987)",
  //   "General: \"Leave anything for us?\"<br />Arnold: \"Just bodies.\"-- Commando (1985)",
  //   "\"Come on, Cohaagen! You got what you want. Give those people air!!\"-- Total Recall (1990)",
  //   "\"What about the guy you lobotomized? Did he get a refund?\"-- Total Recall (1990)",
  //   "Benny: \"Hey man, I got five kids to feed!\"<br /><span class=\"action\">*hands him a wad of cash*</span><br />Arnold: \"Take them to the dentist.\"-- Total Recall (1990)",
  //   "\"Relax. You'll live longer.\"-- Total Recall (1990)",
  //   "\"WOOOAAAHHHHHHHHHHHH\"-- Predator (1987)",
  //   "\"ARRRRRRRGGGGGGGH\"-- Jingle All the Way (1996)",
  //   "\"GAAAAAAGGHHHHHH!\"-- True Lies (1994)",
  //   "\"WWWAAAAAGGHHHHH\"-- Total Recall (1990)",
  //   "\"AAAAARRRRRGGGHHHHHHHHH\"-- Total Recall (1990)",
  //   "\"AAAAAAAAHHHHHHHHHH!!!!\"-- Total Recall (1990)",
  //   "\"GAAAAAAAHHHHHH\"-- Batman & Robin (1997)",
  //   "\"AAAAAAAAHHHHHHHHH\"-- End of Days (1999)",
  //   "\"GWWWOOOHHHHHH\"-- Batman & Robin (1997)",
  //   "\"YYYAAAAAAAAAAAAAAAAAAAAAAAAAAAGGGHHHHHHHHH\"-- Kindergarten Cop (1990)",
  //   "Ted: \"Mmmm! Oh, these cookies!\"<br />Arnold: \"Put the cookie down. NOW!!\"-- Jingle All the Way (1996)",
  //   "\"Cookies? Who told you you could eat my cookies?\"-- Jingle All the Way (1996)",
  //   "\"You want to fuck with me? You think you know bad, huh? You're a fucking CHOIR BOY to me. A CHOIR BOY.\"-- End of Days (1999)",
  //   "\"SCREW YOOOOUUU\"<br /><span class=\"action\">*drills hole into Benny*</span><br />-- Total Recall (1990)",
  //   "\"You cold blooded bastard... I'll tell you what I think of it. I live to see you eat that contract. But I hope you leave enough room for my fist, because I'm going to ram it into your stomach, and break your god damn spine!!!\"-- The Running Man (1987)",
  //   "\"Could I speak to the drug dealer of the house please? It's a beautiful day and we're out killing drug dealers.\"-- Last Action Hero (1993)",
  //   "Kid: \"Hey mister, watch your talk!\"<br />Arnold: \"I can hear my talk, I cannot watch it.\"-- Hercules in New York (1969)",
  //   "\"This is all a lie. I was framed. I am completely innocent!\"-- True Lies (1994)",
  //   "\"Hercules doesn't need any money.\"-- Hercules in New York (1969)",
  //   "Kid: \"Boys have a penis. Girls have a vagina.\"<br />Arnold: \"Thanks for the tip.\"-- Kindergarten Cop (1990)",
  //   "\"Hercules goes where he wishes.\"-- Hercules in New York (1969)",
  //   "\"I'm afraid that my position has left me... cold to your pleas of mercy.\"-- Batman & Robin (1997)",
  //   "\"If I'm not me, who the hell am I?\"-- Total Recall (1990)",
  //   "\"You have no respect for logic. And I have no respect for those with no respect for logic.\"-- Twins (1988)",
  //   "\"Adam... and Evil.\"-- Batman & Robin (1997)",
  //   "\"Your confusion is not rational. She is a healthy female of breeding age.\"-- Terminator 3: Rise of the Machines (2003)",
  //   "\"What the hell is going on here? There's someone in my house, eating my birthday cake, and it's not me.\"-- The 6th Day (2000)",
  //   "\"I saved a life today, what the hell did you do?\"-- End of Days (1999)",
  //   "\"You took my father's sword!\"-- Conan the Barbarian (1982)",
  //   "\"Knives. And stabbing weapons.\"-- Terminator 2: Judgment Day (1991)",
  //   "\"What's the matter? The CIA got you pushing too many pencils?\"-- Predator (1987)",
  //   "\"I remember days like this, when my father took me to the forest and we ate wild blueberries.\"-- Conan the Barbarian (1982)",
  //   "\"If revenge is a dish best served cold... then put on your Sunday's finest, it's time to feast!\"-- Batman & Robin (1997)",
  //   "\"Sue me, dickhead.\"-- Total Recall (1990)",
  //   "\"When I said you should screw yourself... I didn't mean for you to take it literally.\"-- Total Recall (1990)",
  //   "John: \"You've gotta promise me, you're not gonna kill anyone.... right?\"<br />Arnold: \"Right.\"<br /><span class=\"action\">*after shooting a guy in both shins*</span><br />Arnold: \"He'll live.\"-- Terminator 2: Judgment Day (1991)",
  //   "\"Try to stay dead this time.\"-- The 6th Day (2000)",
  //   "\"You have striked Hercules.\"-- Hercules in New York (1969)",
  //   "\"It's just a doll... it's just a stupid little plastic doll.\"-- Jingle All the Way (1996)",
  //   "\"Kill the heroes! Yes, kill them, kill them, yes!\"-- Last Action Hero (1993)",
  //   "\"You picked the wrong day.\"<br /><span class=\"action\">*punches reindeer in the face*</span><br />-- Jingle All the Way (1996)",
  //   "\"Fine chariot, but where are ze horses?\"-- Hercules in New York (1969)",
  //   "\"It's turbo time.\"-- Jingle All the Way (1996)",
  //   "\"NOOOO! Please, anything but my statue of me!\"-- Around the World in 80 Days (2004)",
  //   "\"Gee, did you make a movie mistake? You forgot to reload the damn gun!\"-- Last Action Hero (1993)",
  //   "John: \"Is it dead?\"<br />Arnold: \"Terminated.\"-- Terminator 2: Judgment Day (1991)",
  //   "<span class=\"action\">*grabs box with cat in it*</span><br />\"Ok, enough philosophy. I've got to get going.\"-- The 6th Day (2000)",
  //   "Kirby: \"Until next time.\"<br />Arnold: \"No chance.\"-- Commando (1985)"
