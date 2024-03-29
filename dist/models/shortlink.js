"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importStar(require("mongoose"));
const mongoose_beautiful_unique_validation_1 = __importDefault(require("mongoose-beautiful-unique-validation"));
const shortlinkSchema = new mongoose_1.Schema({
    hash: {
        type: String,
        required: true,
        unique: true,
        immutable: true
    },
    location: {
        type: String,
        required: true,
    },
    descriptor: {
        userTag: { type: String },
        descriptionTag: { type: String }
    },
    owner: {
        type: mongoose_1.Schema.Types.ObjectId,
        index: true,
        required: false,
        immutable: true
    },
    urlMetadata: {
        type: mongoose_1.Schema.Types.Mixed
    },
    siteTitle: {
        type: String
    },
    siteDescription: {
        type: String
    },
    snooze: {
        awake: Number,
        description: String
    },
    tags: {
        type: [String]
    },
    _searchIndex: {
        type: String
    }
}, { timestamps: true });
shortlinkSchema.plugin(mongoose_beautiful_unique_validation_1.default);
exports.default = mongoose_1.default.model("Shortlink", shortlinkSchema);
//# sourceMappingURL=shortlink.js.map