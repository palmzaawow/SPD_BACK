import { Controller, Delete, Get, Param, Patch, UseGuards ,Request} from '@nestjs/common';
import { contentType } from './interface/content.interface';
import { ContentService } from './content.service';
import { AuthGuard } from '../auth/auth.guard';
import { Content } from 'src/typeorm';

@Controller('admin/content')
export class ContentController {
    constructor(private readonly contentService: ContentService) {}
    
    @UseGuards(AuthGuard)
    @Get('show')
    async getShowContent(@Request() req):Promise<Content>{
        return await this.contentService.getShowContent(req.user);
    }

    @UseGuards(AuthGuard)
    @Delete('show')
    async deleteShowContent(@Request() req){
        await this.contentService.deleteShowContent(req.user);
    }

    @UseGuards(AuthGuard)
    @Patch('show/:text')
    async patchShowContent(@Request() req,@Param('text')text:string):Promise<Content>{
        return await this.contentService.patchShowContent(req.user,text);
    }

    @UseGuards(AuthGuard)
    @Get('queue')
    async getQueueContent(@Request() req):Promise<Content[]> {
        return await this.contentService.getQueueContent(req.user);
    }

    @UseGuards(AuthGuard)
    @Delete('queue/:id')
    async deleteQueueContent(@Param('id')id:string){
        await this.contentService.deleteQueueContent(id);
    }

    @UseGuards(AuthGuard)
    @Patch('queue/:id/:text')
    async patchQueueContent(@Param('id')id:string,@Param('text')text:string):Promise<Content>{
        return await this.contentService.patchShowContent(id,text);
    }

    

}


