namespace SpriteKind {
    export const Ball = SpriteKind.create()
    export const wall = SpriteKind.create()
    export const Text = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Ball, SpriteKind.wall, function (sprite, otherSprite) {
	
})
