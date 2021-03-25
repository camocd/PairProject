package com.pairproject.papercv.controller;

import com.pairproject.papercv.model.Word;
import com.pairproject.papercv.service.DataService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;

/**
 * 数据统计控制器
 *
 * @date 2021/03/25
 */
@RestController
@RequestMapping("/data")
public class DataController {
    @Autowired
    private DataService dataService;

    @GetMapping("/trend/iccv")
    public List<Word> getTrendICCV() {
        return dataService.getTrendWord("ICCV", Arrays.asList("2011", "2013", "2015", "2017", "2019"));
    }

    @GetMapping("/trend/eccv")
    public List<Word> getTrendECCV() {
        return dataService.getTrendWord("ECCV", Arrays.asList("2016", "2018", "2020"));
    }

    @GetMapping("/trend/cvpr")
    public List<Word> getTrendCVPR() {
        return dataService.getTrendWord("CVPR", Arrays.asList("2016", "2017", "2018", "2019", "2020"));
    }

    @GetMapping("/count/{meeting}")
    public int getPaperCount(@PathVariable("meeting") String meeting) {
        return dataService.getPaperCount(meeting);
    }

}
