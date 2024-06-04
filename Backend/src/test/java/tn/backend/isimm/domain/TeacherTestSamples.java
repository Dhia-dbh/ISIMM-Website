package tn.backend.isimm.domain;

import java.util.Random;
import java.util.UUID;
import java.util.concurrent.atomic.AtomicLong;

public class TeacherTestSamples {

    private static final Random random = new Random();
    private static final AtomicLong longCount = new AtomicLong(random.nextInt() + (2 * Integer.MAX_VALUE));

    public static Teacher getTeacherSample1() {
        return new Teacher().id(1L).cin("cin1").numTeacher("numTeacher1").email("email1").lastName("lastName1").firstName("firstName1");
    }

    public static Teacher getTeacherSample2() {
        return new Teacher().id(2L).cin("cin2").numTeacher("numTeacher2").email("email2").lastName("lastName2").firstName("firstName2");
    }

    public static Teacher getTeacherRandomSampleGenerator() {
        return new Teacher()
            .id(longCount.incrementAndGet())
            .cin(UUID.randomUUID().toString())
            .numTeacher(UUID.randomUUID().toString())
            .email(UUID.randomUUID().toString())
            .lastName(UUID.randomUUID().toString())
            .firstName(UUID.randomUUID().toString());
    }
}
