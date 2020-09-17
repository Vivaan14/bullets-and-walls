function hasCollided (bullet,wall){
bulletrightEdge = bullet.x + bullet.width;
wallleftEdge = wall.x;
if(bulletrightEdge>=wallleftEdge){
return true
}
return false
}