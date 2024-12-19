const answers = {
    	1:'flag{48bb6e862e54f2a795ffc4e541caed4d}',
	2:'flag{7e8a05d33e27fb018d4d98fdd3c4abfe}',
	3:'flag{89b74318a1fd483115a1d7795bbe9b55}',
	4:'flag{bb89a6733018abaea1439857dd665fd1}',
	5:'flag{2c1b4ff4f0a3c3acdf07c04311201a1c}',
	6:'flag{d5cae307b2b46f4a9be62ea8a2b8dc4a}',
	7:'flag{c2f3e72ec771f20d84118daa6b1c4aff}',
	8:'flag{72fa3460181c59be5ae5a13d4ef85cc1}',
	9:'flag{18758c54e740081f5d24ea908e1bd7d8}',
	10:'flag{043c25667d01ed88bad1cecba636d66b}',
	11:'flag{04k0ecaedf01ed88bad1cecba636d66b}'
};

function checkAnswer(level) {
    const input = document.getElementById(`input${level-1}`).value;
    const feedback = document.getElementById(`feedback${level-1}`);

    if (input === answers[level]) {
        feedback.textContent = "Correct! Moving to the next level...";
        feedback.style.color = "lime";
        setTimeout(() => {
            document.getElementById(`level${level-1}`).style.display = "none";
            document.getElementById(`level${level }`).style.display = "block";
        }, 1000);
    } else {
        feedback.textContent = "Incorrect. Try again.";
        feedback.style.color = "red";
    }
}

