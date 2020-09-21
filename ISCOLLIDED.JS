function hasCollided (lbullet,lwall){
bulletrightEdge = lbullet.x + lbullet.width;
wallleftEdge = lwall.x;
if(bulletrightEdge>=wallleftEdge){
return true
}
return false
}
