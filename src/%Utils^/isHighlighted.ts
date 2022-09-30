export default function isHighlighted(CircClickedCN) {
    if (CircClickedCN.src.slice(-16) === '/whiteCircle.png') {
        return false 
    } else {
        return true
    }
}