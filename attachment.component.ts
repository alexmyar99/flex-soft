import { Component } from '@angular/core';

import { EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { ProcessContentService } from '@alfresco/adf-core';

@Component({
    selector: 'aca-attachment',
    styleUrls: ['./attachment.component.scss'],
    templateUrl: './attachment.component.html'
})
export class AttachmentComponent implements OnChanges {

    /** (required) The numeric ID of the task to display. */
    @Input()
    taskId: string;

    /** Emitted when an error occurs while creating or uploading an
     *  attachment from the user within the component.
     */
    @Output()
    error: EventEmitter<any> = new EventEmitter<any>();

    /** Emitted when an attachment is created or uploaded successfully
     * from within the component.
     */
    @Output()
    success: EventEmitter<any> = new EventEmitter<any>();

    constructor(private activitiContentService: ProcessContentService) {
    }

    ngOnChanges(changes: SimpleChanges) {
        if (changes['taskId'] && changes['taskId'].currentValue) {
            this.taskId = changes['taskId'].currentValue;
        }
    }

    onFileUpload(event: any) {
        const filesList: File[] = event.detail.files.map(obj => obj.file);

        for (const fileInfoObj of filesList) {
            const file: File = fileInfoObj;
            const opts = {
                isRelatedContent: true
            };
            this.activitiContentService.createTaskRelatedContent(this.taskId, file, opts).subscribe(
                (res) => {
                    this.success.emit(res);
                },
                (err) => {
                    this.error.emit(err);
                }
            );
        }
    }
}
