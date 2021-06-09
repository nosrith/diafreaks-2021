import Station from "./Station";
import Stop from "./Stop";
import Track from "./Track";
import Train, { TrainStopRange } from "./Train";

export interface TrainSelectionState {
    trainId: number;
    stopRange: TrainStopRange | null;
}

export default class ViewState {
    viewWidth = 0;
    viewHeight = 0;
    maxRelY = 0;
    trainSelections: { [trainId: number]: TrainSelectionState } = {};
    pointerDragging = false;
    pointerOnMarker = false;
    pointerScreenX = 0;
    pointerTime = 0;
    pointerY = 0;
    pointerTargetLine: { station: Station, track: "top" | "bottom" | Track } | null = null;
    pointerPreciseState: { sx0: number, t0: number } | null = null;
    editMode = true;
    drawingState: { train: Train, lastStop: Stop, floating: Stop | "arr" | "dep" | null, direction: number } | null = null;
    trainPathDragState: { timeShift: number } | null = null;
    stationNameInputTarget: { stationId: number } | null = null;
    trackNameInputTarget: { stationId: number, trackId: number } | null = null;
    controlKeyPressed = false;
    diagramFileName = "";
    helpPaneEnabled = false;

    get isInputEnabled(): boolean {
        return this.stationNameInputTarget != null || this.trackNameInputTarget != null;
    }
}
