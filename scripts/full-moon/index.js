// Script example for ScriptAPI
// Author: GlitchyTurtle32 <https://github.com/GlitchyTurtle>
// Project: https://github.com/JaylyDev/ScriptAPI
import { world } from "@minecraft/server";

const FULL_MOON = ((world.getAbsoluteTime() - world.getTime()) / 24000) % 8 == 0;
const NIGHT_TIME = world.getTime() > 12000;

if (FULL_MOON && NIGHT_TIME) {
    // Code goes here!
}