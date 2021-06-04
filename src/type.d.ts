type tileType = 'water' | 'hit' | 'miss' | 'sunk' | 'dd' | 'ca' | 'bb' | 'cv' | 'ss';
type coordType = { x: number, y: number };
type tileData = {
    tile: tileType,
    shipId: string | null,
    coord: coordType,
};
type boardData = (tileData[])[];

type menuState = { menu: string };

type action = {
    type: string,
    payload?: unknown,
}

interface state {
    counter: number,
    menuState: menuState,
    gameBoard: boardData,
}

interface ActionInit {
    type: 'INIT',
    payload?: { w: number, h: number },
}

interface ActionDelete {
    type: 'DEL',
}

interface ActionFire {
    type: 'FIRE',
    payload: { x: number, y: number },
}

type BoardActions = ActionInit | ActionFire | ActionDelete;