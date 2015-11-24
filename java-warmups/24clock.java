// import java.util.Thread;
// import java.time.Instant;

class Clock {
  private int seconds;
  private int minutes;
  private int hours;
    
  public Clock() { }

  public void setTime(int hours, int minutes, int seconds) {
    this.seconds = seconds;
    this.minutes = minutes;
    this.hours = hours;
  }
  // This should be private buuuuuut . . . testing
  public void tick() {
    seconds++;
    if (seconds > 59) {
      minutes++;
      seconds = 0;
    }
    if (minutes > 59) {
      hours++;
      minutes = 0;
    }
    if (hours > 23) {
      hours = 0;
    }
  }

  public String getTime() {
    return String.format("%02d : %02d : %02d", hours, minutes, seconds);
  }
}


class ClockTest {
  public static void main(String[] args) throws InterruptedException {
    // Instant myInst = new Instant();
    // System.out.println(myInst.now());
    Clock myClock = new Clock();
    System.out.println(myClock.getTime());
    myClock.setTime(9, 7, 28);
    System.out.println(myClock.getTime());
    myClock.setTime(13, 47, 28);
    while(true) {
      Thread.sleep(1000);
      myClock.tick();
      System.out.println(myClock.getTime());
    // }
  // } 
}
