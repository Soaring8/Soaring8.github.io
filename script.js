const input = document.querySelector(`input[name="pw"]`);

const pw = input.value;

if (pw.length < 8) {
    pw.text = "Weak Password"
}