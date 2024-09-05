import { enableMapSet, enablePatches } from "immer";
import "./polyfill";

enablePatches();
enableMapSet();

// Export lazy signal first to avoid circular dependency issues
export { AsyncDeriveFromStrategy, isAvailable, LazySignal, NotAvailable } from "./LazySignal";

export { ChatHistory, ChatMessage } from "../../lms-client/src/ChatHistory";
export { BufferedEvent } from "./BufferedEvent";
export { Cleaner } from "./Cleaner";
export { deepFreeze } from "./deepFreeze";
export { changeErrorStackInPlace, getCurrentStack } from "./errorStack";
export { Event } from "./Event";
export { doesFileNameIndicateModel, modelExtensions } from "./fileName";
export { flattenSignalOfSignal, flattenSignalOfWritableSignal } from "./flattenSignal";
export { HandledEvent } from "./HandledEvent";
export { lmsDefaultPorts } from "./lmsDefaultPorts";
export { makePrettyError, makeTitledPrettyError } from "./makePrettyError";
export { makePromise } from "./makePromise";
export { makeSetter, makeSetterWithPatches, Setter, WriteTag } from "./makeSetter";
export { OWLSignal } from "./OWLSignal";
export { removeUndefinedValues } from "./removeUndefinedValues";
export {
  createResultSchema,
  MaybeErrored,
  maybeErroredSchema,
  promiseToMaybeErrored,
  promiseToResult,
  Result,
  unwrapPromiseOfMaybeErrored,
  unwrapPromiseOfResult,
} from "./resultTypes";
export { runOnDispose } from "./runOnDispose";
export { safeCallCallback } from "./safeCallCallback";
export { Signal, SignalLike, WritableSignal } from "./Signal";
export { LoggerInterface, SimpleLogger, SimpleLoggerConstructorOpts } from "./SimpleLogger";
export { makeSlicedSignalFrom, SlicedSignalBuilder } from "./SlicedSignal";
export { StreamablePromise } from "./StreamablePromise";
export { Subscribable } from "./Subscribable";
export { text } from "./text";
export { TimeoutTracker } from "./TimeoutTracker";
export { toJSONSafeNumber } from "./toJSONSafeNumber";
export { Validator } from "./Validator";
export {
  PagerExitedError,
  QueueClearedError,
  WaitQueue,
  type Holder,
  type Pager,
} from "./WaitQueue";
export { failOk, filteredArray } from "./zodHelpers";
