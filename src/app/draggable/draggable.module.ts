import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { DraggableDirective } from "./draggable.directive";

import { DraggableHelperDirective } from "./draggable-helper.directive";
import { OverlayModule } from "@angular/cdk/overlay";

import { DropzoneDirective } from "./dropzone.directive";
import { DroppableDirective } from "./droppable.directive";
import { DroppableService } from './droppable.service';

@NgModule({
  imports: [CommonModule, OverlayModule],
  declarations: [
    DraggableDirective,
    DraggableHelperDirective,
    DropzoneDirective,
    DroppableDirective
  ],
  exports: [
    DraggableDirective,
    DraggableHelperDirective,
    DropzoneDirective,
    DroppableDirective
  ],
  providers: [
    DroppableService
  ]
})
export class DraggableModule {}