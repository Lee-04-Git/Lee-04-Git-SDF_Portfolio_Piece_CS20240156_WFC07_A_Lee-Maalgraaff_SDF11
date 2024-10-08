function validateSyntax() {
    let input = document.getElementById('petInput').value;
    let result = ''; // Placeholder for validation result
    const prefix = "pet_";
    const dateLength = 4; 

    if (!input.startsWith(prefix)) {
        result = "Invalid Syntax";
    } else {
        let petDateStr = input.substring(prefix.length, prefix.length + dateLength);
        let petDateNum = Number(petDateStr);

        if (isNaN(petDateNum) || petDateStr.length !== dateLength || !/^\d+$/.test(petDateStr)) {
            result = "Invalid Syntax";
        } else {
            let petName = input.substring(prefix.length + dateLength);
        
            if (petName.length < 1) {
                result = "Invalid Syntax";
            } else {
                result = "Valid Syntax";
            }
        }
    }

    document.getElementById('result').innerText = result;    
         
}


